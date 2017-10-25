import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import store from '../../store/store';

class RequestCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }

  // TODO: refresh connections page when accepting (currently new connections not shown after approval)
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
    return (
      <View style={this.state.hidden ? styles.hidden : styles.flexVertical}>
        <View style={styles.profileImageView}>
          <Image
            style={styles.profileImage}
            source={require('../MessagingHeader/default-user.jpg')}
          />
        </View>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>{this.props.uid}</Text>
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

export default RequestCard;
