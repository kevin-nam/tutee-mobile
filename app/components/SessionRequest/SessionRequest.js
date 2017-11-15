import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as sessionActions from '../../actions/session-actions';

class SessionRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      profile_picture: '',
      username: '',
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentDidMount() {
    this.getProfileData();
  }

  getProfileData = () => {
    const uid = this.props.content.tid;
    fetch('http://138.197.159.56:3232/user/getUser/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok && response._bodyInit) {
          return response.json();
        } else {
          console.log('Error when getting user data for ' + uid);
          this.setState({
            profile_picture: '',
            username: uid,
            loading: false,
          });
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            profile_picture: data.profile_picture,
            username: data.username,
            loading: false,
          });
        } else {
          this.setState({
            profile_picture: '',
            username: uid,
            loading: false,
          });
        }
      });
  };

  onPressAccept = () => {
    console.log('accept');

    const sid = {
      sid: this.props.content.sid,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/session/accept', {
      method: 'POST',
      body: JSON.stringify(sid),
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        console.log('Successfully approved session');
      } else {
        console.log('Failed to approve session');
      }
    });

    this.props.navigation.dispatch(
      sessionActions.showInSession(this.props.content)
    );
  };

  onPressReject = () => {
    console.log('reject');

    const sid = {
      sid: this.props.content.sid,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/session/reject', {
      method: 'POST',
      body: JSON.stringify(sid),
      headers: headers,
    }).then(function(response) {
      if (response.ok) {
        console.log('Successfully rejected session');
      } else {
        console.log('Failed to reject connection', connection);
      }
    });

    this.props.navigation.goBack();
  };

  render() {
    if (!this.state.loading) {
      const profile_picture = this.state.profile_picture
        ? { uri: this.state.profile_picture }
        : require('../MessagingHeader/default-user.jpg');

      return (
        <View style={styles.flexVertical}>
          <View style={styles.imageView}>
            <Image style={styles.image} source={profile_picture} />
          </View>
          <View style={styles.infoView}>
            <Text allowFontScaling={false} style={styles.nameText}>
              {this.state.username}
            </Text>
            <Text allowFontScaling={false} style={styles.infoText}>
              is sending you a session request for 1 hour at a rate of $10/hour!
            </Text>
          </View>
          <View style={styles.acceptRejectView}>
            <TouchableOpacity
              onPress={this.onPressAccept}
              style={styles.acceptBtn}
            >
              <Text allowFontScaling={false} style={styles.acceptText}>
                Accept
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onPressReject}
              style={styles.rejectBtn}
            >
              <Text allowFontScaling={false} style={styles.rejectText}>
                Reject
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default SessionRequest;
