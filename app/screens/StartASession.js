import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import store from '../store/store';
import styles from './styles';

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
    this.setState({ loading: false });
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
      }).then(function(response) {
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
      }).then(function(response) {
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
      }).then(function(response) {
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
        <Container color={false}>
          <Text allowFontScaling={false}>Tutee:</Text>
          <Text allowFontScaling={false} style={styles.startSessionUsername}>
            {this.props.navigation.state.params.username}
          </Text>
          <Image source={profile_picture} style={styles.startSessionImage} />
          <Text allowFontScaling={false}>Duration (in hours)</Text>
          <TextInput
            onChangeText={(duration) => {
              this.setState({ duration: duration });
            }}
            maxLength={3}
            keyboardType="numeric"
            placeholder="2"
            style={styles.startSessionDurationInput}
          />
          <Text allowFontScaling={false}>Rate (per hour)</Text>
          <TextInput
            onChangeText={(rate) => {
              this.setState({ rate: rate });
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
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default StartASession;
