import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

class SessionCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      hidden: false,
      profile_picture: '',
      username: '',
    };
  }

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = () => {
    const uid = this.props.tid;
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
          })
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            profile_picture: data.profile_picture,
            username: data.username,
            loading: false,
          })
        } else {
          this.setState({
            profile_picture: '',
            username: uid,
            loading: false,
          })
        }
      });
  };

  onPressAccept = () => {
    console.log('accept');

    const sid = {
      sid: this.props.sid,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch('http://138.197.159.56:3232/session/accept', {
      method: 'POST',
      body: JSON.stringify(sid),
      headers: headers
    }).then((response) => {
      this.setState({hidden: true});
      if (response.ok) {
        console.log('Successfully approved session');
      } else {
        console.log('Failed to approve connection', connection);
      }
    });

  };

  onPressReject = () => {
    console.log('reject');

    this.setState({hidden: true});

    const sid = {
      sid: this.props.sid,
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch('http://138.197.159.56:3232/session/reject', {
      method: 'POST',
      body: JSON.stringify(sid),
      headers: headers
    }).then(function (response) {
      if (response.ok) {
        console.log('Successfully rejected session');
      } else {
        console.log('Failed to reject connection', connection);
      }
    });
  };

  render() {
    if (!this.state.loading) {
      const profile_picture = this.state.profile_picture ? {uri: this.state.profile_picture} : require('../MessagingHeader/default-user.jpg');

      return (
        <View style={this.state.hidden ? styles.hidden : styles.flexVertical}>
          <View style={styles.profileImageView}>
            <Image style={styles.profileImage} source={profile_picture}/>
          </View>
          <View style={styles.profileTextView}>
            <Text style={styles.profileText}>{this.state.username}</Text>
            <Text
              style={styles.sessionInfoText}>{this.props.duration} {this.props.duration > 1 ? 'hours' : 'hour'}</Text>
            <Text style={styles.sessionInfoText}>${this.props.rate}/hour</Text>
          </View>
          <View style={styles.acceptRejectBtnView}>
            <TouchableOpacity onPress={this.onPressAccept} style={styles.acceptBtn}>
              <Text style={styles.acceptText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.onPressReject}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default SessionCard;
