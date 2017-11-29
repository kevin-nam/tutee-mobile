import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import store from '../store/store';
import { Container } from '../components/Container';
import { Header } from 'react-native-elements';
import { TitledTextInput } from '../components/SettingsComponents';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class EditAccount extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: this.props.navigation.state.params.user.username,
      bio: this.props.navigation.state.params.user.bio,
    };
  }

  saveUserInfo = async () => {
    const user = this.props.navigation.state.params.user;
    if (
      typeof this.state.username == 'undefined' ||
      typeof this.state.bio == 'undefined'
    ) {
      alert('Please make sure that every field has something written in it!');
    } else if (this.state.username.length == 0 || this.state.bio.length == 0) {
      alert('Please make sure that every field has something written in it!');
    } else {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      fetch('http://138.197.159.56:3232/user/updateUser/', {
        method: 'POST',
        body: JSON.stringify({
          uid: store.getState().user.uid,
          username: this.state.username,
          email: user.email,
          profile_picture: user.profile_picture,
          bio: this.state.bio,
        }),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            console.log('success');
            return response.json();
          } else {
            console.log('Error when updating user info');
          }
        })
        .then((data) => {
          this.props.navigation.goBack(null);
        });
    }
  };

  render() {
    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <Header
          outerContainerStyles={styles.settingsHeaderOuterContainerStyle}
          innerContainerStyles={styles.customHeaderInnerContainerStyle}
          backgroundColor={EStyleSheet.value('$baseCoral')}
          centerComponent={
            <Text
              allowFontScaling={false}
              style={styles.customHeaderCenterComponentText}
            >
              Edit Account Info
            </Text>
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} hitSlop={{ top: 0, bottom: 10, left: 50, right: 50 }}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.settingsScrollView}
          behavior="padding"
        >
          <ScrollView
            style={styles.searchLandingView}
            showsVerticalScrollIndicator={false}
          >
            <TitledTextInput
              text="Username"
              defaultVal={this.state.username}
              onChangeText={(text) => {
                this.setState({ username: text });
              }}
              multiline={false}
            />
            <TitledTextInput
              text="Bio"
              defaultVal={this.state.bio}
              onChangeText={(text) => {
                this.setState({ bio: text });
              }}
              multiline={true}
            />
            <View style={styles.editAccountSaveButton}>
              <TouchableOpacity onPress={() => this.saveUserInfo()}>
                <Text
                  allowFontScaling={false}
                  style={styles.editAccountSaveButtonText}
                >
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default EditAccount;
