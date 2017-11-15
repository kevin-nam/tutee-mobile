import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import store from '../../store/store';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

class ConnectionCard extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      username: this.props.uid,
      profile_picture: '',
      loading: true,
    };
  }

  onPressHandler = () => {
    const myUid = store.getState().user.uid;
    this.props.navigation.navigate('Messaging', {
      fromUid: myUid,
      toUid: this.props.uid,
      isTutor: this.props.isTutor,
      username: this.state.username,
      profile_picture: this.state.profile_picture,
    });
  };

  componentDidMount() {
    this.getProfileData();
  }

  getProfileData = () => {
    fetch('http://138.197.159.56:3232/user/getUser/' + this.props.uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok && response._bodyText) {
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + this.props.uid);
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            username: data.username,
            profile_picture: data.profile_picture,
            loading: false,
          });
        } else {
          this.setState({ loading: false });
        }
      });
  };

  render() {
    if (!this.state.loading) {
      return (
        <TouchableWithoutFeedback onPress={this.onPressHandler}>
          <View
            style={
              this.props.isTutor
                ? styles.flexVerticalTutor
                : styles.flexVertical
            }
          >
            <View style={styles.profileImageView}>
              <Image
                style={styles.profileImage}
                borderRadius={25}
                source={
                  this.state.profile_picture
                    ? { uri: this.state.profile_picture }
                    : require('../MessagingHeader/default-user.jpg')
                }
              />
            </View>
            <View style={styles.profileTextView}>
              <Text allowFontScaling={false} style={styles.profileText}>
                {this.state.username}
              </Text>
            </View>
            <View
              style={
                this.props.isTutor ? styles.studentIconView : styles.hidden
              }ii
            >
              <Icon
                name="graduation-cap"
                color={EStyleSheet.value('$baseCoral')}
                size={18}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    } else {
      return null;
    }
  }
}

export default ConnectionCard;
