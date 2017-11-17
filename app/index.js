import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createRootNavigator } from './config/routes';
import { AsyncStorage, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import firebaseDbh from './config/firebase';
import { Notifications, Permissions, Font } from 'expo';

import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actions';
import * as sessonActions from './actions/session-actions';

EStyleSheet.build({
  // base color set
  $baseCoral: '#FF6B6C',
  $baseGray: '#777777',
  $baseBlue: '#69D2E7',
  $baseRed: '#D9534F',
  $baseGreen: '#5CB85C',
  $baseYellow: '#FFC300',

  // accent color set
  $grayLighten50: '#F6F6F6',
  $grayLighten45: '#EAEAEA',
  $grayLighten40: '#DDDDDD',
  $grayLighten35: '#D0D0D0',
  $grayLighten30: '#C4C4C4',
  $grayLighten25: '#B7B7B7',
  $blueDarken30: '#1D869B',

  // other
  $facebookBlue: '#3B5699',

  // outline: 1,
});

async function getiOSNotificationPermission() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  if (status !== 'granted') {
    await Permissions.askAsync(Permissions.NOTIFICATIONS);
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      isFontLoaded: false,
    };

    console.ignoredYellowBox = ['Setting a timer'];
  }

  checkIfLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:TOKEN_KEY');
      this.setState({ checkedSignIn: true });
      if (value !== null) {
        console.log('got token', value);
        const username = await AsyncStorage.getItem(
          '@MySuperStore:USER_NAME_KEY'
        );
        const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');

        // Get redux actions and set user
        const actions = bindActionCreators(actionCreators, store.dispatch);
        actions.setUsername(await username);
        actions.setUid(await uid);

        this.setState({ signedIn: true });
      }
    } catch (error) {
      console.log('Not logged in.', error);
    }
  };

  listenForNotifications = () => {
    const dbref = firebaseDbh.ref(
      '/notifications/' + store.getState().user.uid + '/notifications'
    );
    console.log('listening....');

    // Listen for local notifications and do stuff
    Notifications.addListener((notification) => {
      console.log('notification received', notification);
    });

    // listen for new notifications from firebase
    dbref.on('child_added', (e) => {
      if (e.val().type === 'NEW_SESSION_REQUEST') {
        this.app.dispatch(sessonActions.showSessionRequest(e.val().content));
      } else if (e.val().type === 'ACCEPTED_SESSION_REQUEST') {
        this.app.dispatch(sessonActions.showInSession(e.val().content));
      }

      const notification = {
        title: 'Push Notification',
        body: e.val().msg,
        android: {
          sound: true,
        },
        ios: {
          sound: true,
        },
      };

      // Show local notification
      Expo.Notifications.presentLocalNotificationAsync(notification);

      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      // acknowledge notification and remove from firebase
      fetch('http://138.197.159.56:3232/notifications/acknowledge', {
        method: 'POST',
        body: JSON.stringify({ uid: store.getState().user.uid }),
        headers: headers,
      }).then(function(response) {
        if (response.ok) {
          console.log('Successfully acknowledged notification', e);
        } else {
          console.log('Error acknowledging notification', e);
        }
      });
    });
  };

  // Runs before render
  componentWillMount() {
    // AsyncStorage.clear();
    getiOSNotificationPermission();
    this.checkIfLoggedIn();
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
      'Poppins-BlackItalic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
      'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
      'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
      'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
      'Poppins-ExtraBoldItalic': require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
      'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
      'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
      'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
      'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      'Poppins-LightItalic': require('../assets/fonts/Poppins-LightItalic.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
      'Poppins-MediumItalic': require('../assets/fonts/Poppins-MediumItalic.ttf'),
      'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
      'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
      'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
      'Poppins-ThinItalic': require('../assets/fonts/Poppins-ThinItalic.ttf'),
    });
    this.setState({ isFontLoaded: true });
  }

  // Render the appropriate screen
  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    } else if (signedIn) {
      this.listenForNotifications();
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        {this.state.isFontLoaded ? (
          <Layout
            onNavigationStateChange={(prevState, currentState) => {
              const getCurrentRouteName = (navigationState) => {
                if (!navigationState) return null;
                const route = navigationState.routes[navigationState.index];
                if (route.routes) return getCurrentRouteName(route);
                return route.routeName;
              };
              const actions = bindActionCreators(actionCreators, store.dispatch);
              actions.setCurrentRoute(getCurrentRouteName(currentState));
            }}
            ref={(app) => {
              this.app = app;
            }}
          />
        ) : (
          <Text>Error</Text>
        )}
      </Provider>
    );
  }
}

export default App;
