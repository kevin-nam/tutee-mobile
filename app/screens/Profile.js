import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text, View } from 'react-native';
import { Container } from '../components/Container';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileBody } from '../components/ProfileBody';
import { AsyncStorage } from 'react-native';

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
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillMount() {
    this.getProfileData();
  }

  getProfileData = async () => {
    const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
    fetch('http://138.197.159.56:3232/user/getUser/' + (await uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('success');
          return response.json();
        } else {
          console.log('Error when creating user');
        }
      })
      .then((data) => {
        // console.log(data);
        this.setState({ user: data });
        console.log(data);
      });
  };

  render() {
    const user = this.state.user;
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <View
          style={{
            flex: 1,
            alignSelf: 'stretch',
            flexDirection: 'column',
            backgroundColor: 'white',
          }}
        >
          <ProfileHeader user={user} />
          <ProfileBody user={user} />
        </View>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Profile));

export default Profile;
