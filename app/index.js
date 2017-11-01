import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createRootNavigator } from './config/routes';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';
import firebaseDbh from './config/firebase';
import { Notifications, Permissions } from 'expo';

import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actions';

EStyleSheet.build({
  // base color set
  $baseCoral: '#FF6B6C',
  $baseGray: '#777777',
  $baseBlue: '#69D2E7',
  $baseRed: '#D9534F',

  // accent color set
  $grayLigthen45: '#EAEAEA',
  $grayLigthen40: '#DDDDDD',
  $grayLighten35: '#D0D0D0',
  $blueDarken30: '#1D869B',

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
      console.log('Not logged in.');
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
        <Layout />
      </Provider>
    );
  }
}

export default App;
