import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import store from '../../store/store';
import { NavigationActions } from 'react-navigation';

class InSessionView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tutor_loading: true,
      tutee_loading: true,
      tutor_profile_picture: '',
      tutor_username: '',
      tutee_username: '',
      tutee_profile_picture: '',
      isTutor: false,
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentDidMount() {
    this.getTuteeProfileData();
    this.getTutorProfileData();
  }

  getTuteeProfileData = () => {
    const uid = this.props.content.uid;

    fetch('http://138.197.159.56:3232/user/getUser/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok && response._bodyInit) {
          return response.json();
        } else {
          console.log('Error when getting user data for ' + uid);
          this.setState({
            tutee_profile_picture: '',
            tutee_username: uid,
            tutee_loading: false,
          });
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            tutee_profile_picture: data.profile_picture,
            tutee_username: data.username,
            tutee_loading: uid === this.props.tid,
          });
        } else {
          this.setState({
            tutee_profile_picture: '',
            tutee_username: uid,
            tutee_loading: false,
          });
        }
      });
  };

  getTutorProfileData = () => {
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
            tutor_profile_picture: '',
            tutor_username: uid,
            tutor_loading: false,
            currentSum: 0,
            numOfRatings: 0,
            isTutor: uid === store.getState().user.uid,
          });
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            tutor_profile_picture: data.profile_picture,
            tutor_username: data.username,
            tutor_loading: uid === this.props.tid,
            currentSum: data.ratingSum,
            numOfRatings: data.numOfRatings,
            isTutor: uid === store.getState().user.uid,
          });
        } else {
          this.setState({
            tutor_profile_picture: '',
            tutor_username: uid,
            tutor_loading: false,
            currentSum: 0,
            numOfRatings: 0,
            isTutor: uid === store.getState().user.uid,
          });
        }
      });
  };

  onPressEndSession = () => {
    if (this.state.isTutor) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      });
      this.props.navigation.dispatch(resetAction);
    } else {
      this.props.navigation.navigate('Rating', {
        uid: this.props.tid,
        currentSum: this.state.currentSum,
        numOfRatings: this.state.numOfRatings,
      });
    }
  };

  render() {
    if (!this.state.tutee_loading && !this.state.tutor_loading) {
      const tutee_profile_picture = this.state.tutee_profile_picture
        ? { uri: this.state.tutee_profile_picture }
        : require('../MessagingHeader/default-user.jpg');

      const tutor_profile_picture = this.state.tutor_profile_picture
        ? { uri: this.state.tutor_profile_picture }
        : require('../MessagingHeader/default-user.jpg');

      return (
        <View style={styles.flexVertical}>
          <View style={styles.titleView}>
            <Text allowFontScaling={false} style={styles.titleText}>
              In Session
            </Text>
          </View>
          <View style={styles.imageView}>
            <Image style={styles.image} source={tutee_profile_picture} />
            <Image style={styles.image} source={tutor_profile_picture} />
          </View>
          <View style={styles.infoView}>
            <Text allowFontScaling={false} style={styles.nameText}>
              Tutor: {this.state.tutor_username}
            </Text>
            <Text allowFontScaling={false} style={styles.nameText}>
              Tutee: {this.state.tutee_username}
            </Text>
            <Text allowFontScaling={false} style={styles.infoText}>
              Duration: {this.props.content.duration}{' '}
              {this.props.content.duration > 1 ? 'hours' : 'hour'}
              {'\n'}
              Rate: ${this.props.content.rate}/hour{'\n'}
              Total Price: ${this.props.content.totalprice}
            </Text>
          </View>
          <View style={styles.endBtnView}>
            <TouchableOpacity
              onPress={this.onPressEndSession}
              style={styles.endBtn}
            >
              <Text allowFontScaling={false} style={styles.endBtnText}>
                End Session
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

export default InSessionView;
