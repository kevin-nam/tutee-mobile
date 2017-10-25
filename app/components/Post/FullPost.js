import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import moment from 'moment';
import styles from './styles';
import store from '../../store/store';

class FullPost extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isRequestable: false,
      isPending: false,
      isMine : false
    }
  }

  componentDidMount() {
    this.checkIfRequestable();
  }

  checkIfRequestable = async () => {
    const myUid = store.getState().user.uid;
    const posterUid = this.props.uid;

    // Check if uid and poster's uid are the same
    // If true, then check if already connected
    if (myUid != posterUid) {
      fetch('http://138.197.159.56:3232/connection/get/' + myUid, {
        method: 'GET',
      })
        .then((response) => {
          if (response.ok) {
            console.log('Successfully got connection data for ' + myUid);
            return response.json();
          } else {
            console.log('Error when getting connection data for ' + myUid);
          }
        })
        .then((data) => {
          this.setState({loading : false});

          if (data && Object.keys(data.connections).length > 0) {
            // Connection doesn't exist
            if (!data.connections[posterUid]) {
              console.log('connection does not exist');
              this.setState({isRequestable : true});
            } else {

              // If connection exists, is it pending?
              if (data.connections[posterUid].isPending) {
                this.setState({isPending : true});
              }
              // else is the user already tutor to the poster?
              else if (data.connections[posterUid].isTutor) {
                this.setState({isRequestable : true});
              }
            }
          }
          // User has no connections
          else {
            this.setState({isRequestable : true});
          }
        });
    } else {
      this.setState({loading : false, isMine: true});
    }
  };

  createPendingConnection = (uid1, uid2) => {
    const connection = {
      uid1: uid1,
      uid2: uid2
    };

    const headers = new Headers({
      "Content-Type": "application/json",
    });

    fetch('http://138.197.159.56:3232/connection/create', {
      method: 'POST',
      body: JSON.stringify(connection),
      headers: headers
    }).then((response) => {
      this.setState({isPending: true, isRequestable: false});
      if (response.ok) {
        console.log('Successfully created connection');
      } else {
        console.log('Failed to create connection', connection);
      }
    });
  };

  onPressRequest = () => {
    const uid = store.getState().user.uid;
    console.log(uid);

    Alert.alert(
      'Confirm Request?',
      'Click "Request" to request a connection with ' + this.props.userName,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Request', onPress: () => this.createPendingConnection(uid, this.props.uid)},
      ],
      { cancelable: true }
    )
  };

  onPressMessage = () => {
    this.props.navigation.navigate('Messaging', {
      fromUid: store.getState().user.uid,
      toUid: this.props.uid,
    })
  };

  render()
  {
    const image = require('./images/Placeholder.png');

    if (!this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.author}>
              <Image
                resizeMode="cover"
                style={styles.icon}
                source={image}
                borderRadius={50}
              />
              <Text style={styles.user}>{this.props.userName}</Text>
            </View>
          </View>
          <View style={styles.body}>
            <Text>{this.props.content}</Text>
          </View>
          <View style={styles.footer}>
            <Text style={styles.date}>{moment(this.props.date).format('MMMM D, YYYY')}</Text>
            <TouchableOpacity
              style={this.state.isMine ? styles.hideButton : styles.requestButton}
              onPress={this.state.isRequestable ? this.onPressRequest : this.onPressMessage}
              disabled={this.state.isPending}>
              <Text style={styles.requestMessageText}>
              {this.state.isRequestable ? "Request" : (this.state.isPending ? "Pending" : "Message")}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tagSection}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Text style={styles.tags}>{this.props.tagString}</Text>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

FullPost.propTypes = {
  uid: PropTypes.string,
  title: PropTypes.string,
  userImage: PropTypes.string,
  userName: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  tagString: PropTypes.string,
};

export default FullPost;
