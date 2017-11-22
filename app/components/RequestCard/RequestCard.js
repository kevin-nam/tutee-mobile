import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import store from '../../store/store';
import EStyleSheet from 'react-native-extended-stylesheet';

class RequestCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }

  onPressAccept = () => {
    console.log('accept');

    const connection = {
      uid1: store.getState().user.uid,
      uid2: this.props.uid,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/connection/approve', {
      method: 'POST',
      body: JSON.stringify(connection),
      headers: headers,
    }).then((response) => {
      this.setState({ hidden: true });
      if (response.ok) {
        console.log('Successfully approved connection');
      } else {
        console.log('Failed to approve connection', connection);
      }
    });
  };

  onPressReject = () => {
    console.log('reject');
    this.setState({ hidden: true });

    const connection = {
      uid1: store.getState().user.uid,
      uid2: this.props.uid,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/connection/delete', {
      method: 'POST',
      body: JSON.stringify(connection),
      headers: headers,
    }).then(function(response) {
      if (response.ok) {
        console.log('Successfully rejected connection');
      } else {
        console.log('Failed to reject connection', connection);
      }
    });
  };

  render() {
    let profile_picture = require('../MessagingHeader/default-user.jpg');
    if (this.props.user) {
      profile_picture = { uri: this.props.user.profile_picture };
    }

    let username = this.props.uid;
    if (this.props.user.username) {
      username = this.props.user.username;
    }

    return (
      <View style={this.state.hidden ? styles.hidden : styles.flexVertical}>
        <View style={styles.profileImageView}>
          <Image
            borderRadius={25}
            style={styles.profileImage}
            source={profile_picture}
          />
        </View>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>{username}</Text>
        </View>
        <View style={styles.acceptRejectBtnView}>
          <TouchableOpacity
            onPress={this.onPressAccept}
            style={styles.acceptBtn}
          >
            <Ionicons
              name="ios-checkmark-circle"
              color={EStyleSheet.value('$baseGreen')}
              size={32}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressReject}>
            <Ionicons
              name="ios-close-circle"
              color={EStyleSheet.value('$baseRed')}
              size={32}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default RequestCard;
