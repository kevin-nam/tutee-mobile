import PropTypes from 'prop-types';
import React from 'react';
import {StatusBar, KeyboardAvoidingView, Text, View} from 'react-native';
import {Container} from '../components/Container';
import {ProfileHeader} from '../components/ProfileHeader';
import {ProfileBody} from '../components/ProfileBody';
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
      uid: ''
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentWillMount() {
    this.getProfileData();
  }

  getProfileData = async() => {
    const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
    fetch('http://138.197.159.56:3232/user/getUser/' + await uid, {
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        console.log('Successfully got profile for ' + uid);
        return response.json();
      } else {
        console.log('Error when getting profile data for ' + uid);
      }
    }).then((data) => {
      this.setState({user: data});
      this.setState({uid: uid});
      console.log('Got user profile data', data);
    });
  };

  render() {
    const user = this.state.user;
    const uid = this.state.uid;

    // Need to check if uid and user are ok
    if (uid && user) {
      return (
        <Container backgroundColor="#9E768F">
          <StatusBar barStyle="light-content"/>
          <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'column', backgroundColor: 'white'}}>
            <ProfileHeader user={user}/>
            <ProfileBody user={user} uid={uid}/>
          </View>
        </Container>
      );
    } else {
      return "empty";
    }
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Profile));

export default Profile;
