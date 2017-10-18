import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createRootNavigator } from './config/routes';
import { AsyncStorage } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/store';

import { bindActionCreators } from 'redux';
import * as actionCreators from './actions/actions';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  checkIfLoggedIn = async () => {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:TOKEN_KEY');
      this.setState({checkedSignIn: true});
      if (value !== null) {
        console.log('got token', value);
        const username = await AsyncStorage.getItem('@MySuperStore:USER_NAME_KEY');
        const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');

        // Get redux actions and set user
        const actions = bindActionCreators(actionCreators, store.dispatch);
        actions.setUsername(await username);
        actions.setUid(await uid);

        this.setState({signedIn: true});
      }
    } catch (error) {
      console.log('Not logged in.');
    }
  };

  // Runs before render
  componentWillMount() {
    //AsyncStorage.clear();
    this.checkIfLoggedIn();
  }

  // Render the appropriate screen
  render() {
    EStyleSheet.build({
      // outline: 1,
    });
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return "empty";
    }

    const Layout = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}