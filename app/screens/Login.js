import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, Text, View, Image, AsyncStorage } from 'react-native';
import { Container } from '../components/Container';
import { FacebookLoginButton } from '../components/FacebookLoginButton';
import { NavigationActions } from 'react-navigation';
import store from '../store/store';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';
import styles from './styles';

const TOKEN_KEY = 'TOKEN_KEY';
const USER_NAME_KEY = 'USER_NAME_KEY';
const USER_ID_KEY = 'USER_ID_KEY';
const USER_PHOTO_KEY = 'USER_PHOTO_KEY';

class Login extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  logIn = async (props) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Index' })],
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
        `https://graph.facebook.com/me?fields=name,email,picture.type(normal)&access_token=${token}`
      )
        .then(function(response) {
          if (response.ok) {
            return response.json();
          } else {
            console.log('Error when fetching facebook data');
          }
        })
        .then(function(data) {
          // Get redux actions and set user
          const actions = bindActionCreators(actionCreators, store.dispatch);
          actions.setUsername(data.name);
          actions.setUid(data.id);

          // TODO: Remove this and use redux instead
          AsyncStorage.setItem('@MySuperStore:' + TOKEN_KEY, token);
          AsyncStorage.setItem('@MySuperStore:' + USER_NAME_KEY, data.name);
          AsyncStorage.setItem('@MySuperStore:' + USER_ID_KEY, data.id);
          AsyncStorage.setItem(
            '@MySuperStore:' + USER_PHOTO_KEY,
            data.picture.data.url
          );

          const user = {
            uid: data.id,
            username: data.name,
            profile_picture: data.picture.data.url,
            email: data.email,
            bio: '',
          };

          const headers = new Headers({
            'Content-Type': 'application/json',
          });

          fetch('http://138.197.159.56:3232/user/createUser', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: headers,
          }).then(function(response) {
            if (response.ok) {
              console.log('Successfully registered');
              // Move to homepage
              props.navigation.dispatch(resetAction);
            } else {
              console.log('Error when creating user', user);
            }
          });
        });
    }
  };

  handlePressFacebookLogin = () => {
    console.log('pressed fb login button');
    this.logIn(this.props);
  };

  render() {
    return (
      <Container color={true}>
        <StatusBar />
        <View style={styles.loginView}>
          <View style={styles.loginLogoView}>
            <Image source={require('../../assets/images/corgilightbulb.gif')} />
            <Text style={styles.loginLogo}>Tutee</Text>
          </View>
          <View style={styles.loginButtonView}>
            <FacebookLoginButton onPress={this.handlePressFacebookLogin} />
          </View>
        </View>
      </Container>
    );
  }
}

export default Login;
