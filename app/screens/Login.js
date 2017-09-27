import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import { Container } from '../components/Container';
import { FacebookLoginButton } from '../components/FacebookLoginButton';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';

const TOKEN_KEY = 'TOKEN_KEY';
const USER_NAME_KEY = 'USER_NAME_KEY';
const USER_ID_KEY = 'USER_ID_KEY';
const USER_PHOTO_KEY = 'USER_PHOTO_KEY';

class Login extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  logIn = async () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });

    const {
      type,
      token,
    } = await Expo.Facebook.logInWithReadPermissionsAsync('1868009723488146', {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      // Get the user using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?fields=name,email,picture&access_token=${token}`
      )
        .then(function(response) {
          if (response.ok) {
            console.log(JSON.stringify(response));
            return response.json();
          } else {
            console.log('Error when fetching');
          }
        })
        .then(function(data) {
          console.log(data);
          AsyncStorage.setItem('@MySuperStore:' + TOKEN_KEY, token);
          AsyncStorage.setItem('@MySuperStore:' + USER_NAME_KEY, data.name);
          AsyncStorage.setItem('@MySuperStore:' + USER_ID_KEY, data.id);
          AsyncStorage.setItem(
            '@MySuperStore:' + USER_PHOTO_KEY,
            data.picture.data.url
          );
        });

      // Move to home page
      this.props.navigation.dispatch(resetAction);

      // TODO: Saving user to firebase database
      // TODO: Logic when failing authentication
    }
  };

  handlePressFacebookLogin = () => {
    console.log('pressed fb login button');
    this.logIn();
  };

  render() {
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Text style={{ color: 'white', fontSize: 50, fontWeight: '600' }}>
            Tutee Login Page
          </Text>
          <FacebookLoginButton onPress={this.handlePressFacebookLogin} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Login));

export default Login;