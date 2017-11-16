import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  TouchableHighlight,
} from 'react-native';
import moment from 'moment';
import styles from './styles';
import store from '../../store/store';
import { Icon } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

class FullPost extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      isRequestable: false,
      isPending: false,
      isMine: false,
    };
  }

  componentDidMount() {
    this.checkIfRequestable();
  }

  checkIfRequestable = async () => {
    const myUid = store.getState().user.uid;
    const posterUid = this.props.post.uid;

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
          this.setState({ loading: false });

          if (data && data.connections && Object.keys(data.connections).length > 0) {
            // Connection doesn't exist
            if (!data.connections[posterUid]) {
              console.log('connection does not exist');
              this.setState({ isRequestable: true });
            } else {
              // If connection exists, is it pending?
              if (data.connections[posterUid].isPending) {
                this.setState({ isPending: true });
              } else if (data.connections[posterUid].isTutor) {
                // else is the user already tutor to the poster?
                this.setState({ isRequestable: true });
              }
            }
          } else {
            // User has no connections
            this.setState({ isRequestable: true });
          }
        });
    } else {
      this.setState({ loading: false, isMine: true });
    }
  };

  createPendingConnection = (uid1, uid2) => {
    const connection = {
      uid1: uid1,
      uid2: uid2,
    };

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/connection/create', {
      method: 'POST',
      body: JSON.stringify(connection),
      headers: headers,
    }).then((response) => {
      this.setState({ isPending: true, isRequestable: false });
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
      'Click "Request" to request a connection with ' +
        this.props.user.username,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Request',
          onPress: () => this.createPendingConnection(uid, this.props.post.uid),
        },
      ],
      { cancelable: true }
    );
  };

  onPressMessage = () => {
    this.props.navigation.navigate('Messaging', {
      fromUid: store.getState().user.uid,
      toUid: this.props.post.uid,
    });
  };

  render() {
    let profile_picture = require('./images/Placeholder.png');
    if (this.props.user && this.props.user.profile_picture) {
      profile_picture = { uri: this.props.user.profile_picture };
    }
    let chooseButton = this.state.isMine ? (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => {
          this.props.navigation.navigate('ModifyPost', {
            edit: true,
            post: this.props.post,
            search: this.props.searchedTags,
          });
        }}
      >
        <Text allowFontScaling={false} style={styles.editMessageText}>
          Edit
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={styles.actionButton}
        onPress={
          this.state.isRequestable ? this.onPressRequest : this.onPressMessage
        }
      >
        <Text allowFontScaling={false} style={styles.requestMessageText}>
          {this.state.isRequestable
            ? 'Request'
            : this.state.isPending ? 'Pending' : 'Message'}
        </Text>
      </TouchableOpacity>
    );
    if (!this.state.loading) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Text allowFontScaling={false} style={styles.title}>
              {this.props.post.title}
            </Text>
            <View style={styles.author}>
              <TouchableHighlight onPress={this.props.onImagePress}>
                <Image
                  resizeMode="cover"
                  style={styles.icon}
                  source={profile_picture}
                  borderRadius={25}
                />
              </TouchableHighlight>
              <View style={styles.authorSubView}>
                <Text allowFontScaling={false} style={styles.user}>
                  {this.props.user.username}
                </Text>
                {this.props.user.rating !== -1 ? (
                  <View style={styles.ratingView}>
                    <Icon
                      name="star"
                      color={EStyleSheet.value('$baseYellow')}
                      size={14}
                    />
                    <Text allowFontScaling={false} style={styles.ratingText}>
                      {this.props.user.rating}/5
                    </Text>
                  </View>
                ) : (
                  <Text allowFontScaling={false} style={styles.ratingText}>
                    New Tutor!
                  </Text>
                )}
              </View>
            </View>
          </View>
          <ScrollView style={styles.fullBody}>
            <Text allowFontScaling={false} style={styles.descriptionText}>
              {this.props.post.description}
            </Text>
          </ScrollView>
          <View style={styles.footer}>
            <Text allowFontScaling={false} style={styles.date}>
              {moment(this.props.post.date).format('MMMM D, YYYY')}
            </Text>
            {chooseButton}
          </View>
          <View style={styles.tagSection}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Text allowFontScaling={false} style={styles.tags}>
                {this.props.post.tagString}
              </Text>
            </ScrollView>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}

export default FullPost;
