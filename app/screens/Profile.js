import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Container } from '../components/Container';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileBody } from '../components/ProfileBody';
import { AsyncStorage } from 'react-native';
import styles from './styles';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        profile_picture: '',
        rating: 0,
        bio: '',
      },
      uid: '',
      mine: false,
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillMount() {
    this.getProfileData();
  }

  getProfileData = async () => {
    let uid;
    if (typeof this.props.navigation.state.params !== 'undefined') {
      uid = this.props.navigation.state.params.otherID;
    } else {
      uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
      this.setState({ mine: true });
    }

    fetch('http://138.197.159.56:3232/user/getUser/' + (await uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Successfully got profile for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + uid);
        }
      })
      .then((data) => {
        this.setState({ user: data });
        this.setState({ uid: uid });
        console.log('Got user profile data', data);
      });
  };

  render() {
    const user = this.state.user;
    const uid = this.state.uid;

    // Need to check if uid and user are ok
    if (uid && user) {
      return (
        <Container color={false}>
          <StatusBar barStyle="light-content" />
          <View style={styles.profileView}>
            <ProfileHeader
              user={user}
              mine={this.state.mine}
              navigation={this.props.navigation}
            />
            <ProfileBody
              navigation={this.props.navigation}
              user={user}
              uid={uid}
            />
          </View>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default Profile;
