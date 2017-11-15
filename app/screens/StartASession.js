import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../store/store';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 50 : 70;

class StartASession extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      duration: 0,
      rate: 0,
    };
  }

  componentDidMount() {
    this.setState({loading: false});
  }

  onPressRequest = () => {
    const navigation = this.props.navigation;

    if (this.state.duration > 0 && this.state.rate > 0) {
      const toUid = this.props.navigation.state.params.uid;
      const myUsername = store.getState().user.username;
      const myUid = store.getState().user.uid;
      const sendMessage = this.sendSystemMessage;
      const rate = this.state.rate;
      const duration = this.state.duration;

      const message = {
        tid: myUid,
        uid: toUid,
        rate: this.state.rate,
        duration: this.state.duration,
      };

      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      fetch('http://138.197.159.56:3232/session/create', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: headers,
      }).then(function (response) {
        if (response.ok) {
          console.log('Successfully sent a session request');
        } else {
          console.log('Error sending session request', message);
        }
        sendMessage(
          myUsername +
          ' sent a session request: $' +
          rate +
          '/hr' +
          ', ' +
          duration +
          ' hours.' +
          ' Total: $' +
          rate * duration,
          myUid,
          toUid
        );
        navigation.goBack();
      });
    } else {
      alert('Please enter a valid duration and rate.');
      this.props.navigation.goBack();
    }
  };

  sendSystemMessage = (text, tid, uid) => {
    const isInverse = this.props.navigation.state.params.isInverseUidRef;

    if (isInverse) {
      const message = {
        uidFrom: 'system',
        uidTutor: uid,
        uidTutee: tid,
        content: text,
      };

      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      fetch('http://138.197.159.56:3232/messaging/send', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: headers,
      }).then(function (response) {
        if (response.ok) {
          console.log('Successfully sent a message');
        } else {
          console.log('Sending message', message);
        }
      });
    } else {
      const message = {
        uidFrom: 'system',
        uidTutor: tid,
        uidTutee: uid,
        content: text,
      };

      const headers = new Headers({
        'Content-Type': 'application/json',
      });

      fetch('http://138.197.159.56:3232/messaging/send', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: headers,
      }).then(function (response) {
        if (response.ok) {
          console.log('Successfully sent a message');
        } else {
          console.log('Sending message', message);
        }
      });
    }
  };

  render() {
    if (!this.state.loading) {
      let profile_picture = require('../components/MessagingHeader/default-user.jpg');
      if (this.props.navigation.state.params.profile_picture) {
        profile_picture = {
          uri: this.props.navigation.state.params.profile_picture,
        };
      }

      return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.startASessionView}>
            <Header
              outerContainerStyles={styles.customHeaderOuterContainerStyle}
              innerContainerStyles={styles.customHeaderInnerContainerStyle}
              backgroundColor={EStyleSheet.value('$baseCoral')}
              centerComponent={
                <Text
                  allowFontScaling={false}
                  style={styles.customHeaderCenterComponentText}
                >
                  Request a session
                </Text>
              }
              leftComponent={
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <Icon name="chevron-left" color="white" size={20}/>
                </TouchableOpacity>
              }
            />
              <KeyboardAvoidingView
                behavior='padding'
                keyboardVerticalOffset={keyboardVerticalOffset}
                style={styles.startASessionInfoView}
              >
                <View>
                <Text style={styles.startASessionTuteeText} allowFontScaling={false}>YOU ARE REQUESTING TO TUTOR:</Text>
                <Text allowFontScaling={false} style={styles.startSessionUsername}>
                  {this.props.navigation.state.params.username}
                </Text>
                </View>
                <Image source={profile_picture} style={styles.startSessionImage}/>
                <View>
                  <Text style={styles.startASessionDurationRateText} allowFontScaling={false}>Duration (in hours)</Text>
                </View>
                <TextInput
                  onChangeText={(duration) => {
                    this.setState({duration: duration});
                  }}
                  maxLength={3}
                  keyboardType="numeric"
                  placeholder="2"
                  style={styles.startSessionDurationInput}
                />
                <View>
                  <Text style={styles.startASessionDurationRateText} allowFontScaling={false}>Rate (per hour)</Text>
                </View>
                <TextInput
                  onChangeText={(rate) => {
                    this.setState({rate: rate});
                  }}
                  maxLength={5}
                  keyboardType="numeric"
                  placeholder="15"
                  style={styles.startSessionRateInput}
                />
                <TouchableOpacity
                  onPress={this.onPressRequest}
                  style={styles.startSessionButtonStyle}
                >
                  <Text
                    allowFontScaling={false}
                    style={styles.startSessionButtonText}
                  >
                    Request a session
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return null;
    }
  }
}

export default StartASession;
