import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class SessionCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  onPressAccept = () => {
    console.log('accept');

    const sid = {
      sid: this.props.sid,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/session/accept', {
      method: 'POST',
      body: JSON.stringify(sid),
      headers: headers,
    }).then((response) => {
      this.setState({ hidden: true });
      if (response.ok) {
        console.log('Successfully approved session');
      } else {
        console.log('Failed to approve session');
      }
    });
    this.props.navigation.navigate('Rating', {
      uid: this.props.tid,
    });
  };

  onPressReject = () => {
    console.log('reject');

    this.setState({ hidden: true });

    const sid = {
      sid: this.props.sid,
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
  };

  render() {
    return (
      <View style={this.state.hidden ? styles.hidden : styles.flexVertical}>
        <View style={styles.profileImageView}>
          <Image
            style={styles.profileImage}
            source={require('../MessagingHeader/default-user.jpg')}
          />
        </View>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>{this.props.tid}</Text>
          <Text style={styles.sessionInfoText}>
            {this.props.duration} {this.props.duration > 1 ? 'hours' : 'hour'}
          </Text>
          <Text style={styles.sessionInfoText}>${this.props.rate}/hour</Text>
        </View>
        <View style={styles.acceptRejectBtnView}>
          <TouchableOpacity
            onPress={this.onPressAccept}
            style={styles.acceptBtn}
          >
            <Text style={styles.acceptText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressReject}>
            <Text style={styles.rejectText}>Reject</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SessionCard;
