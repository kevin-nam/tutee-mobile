import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createRootNavigator } from './config/routes';
import { AsyncStorage } from 'react-native';

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
        console.log(value);
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
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />
  }
}