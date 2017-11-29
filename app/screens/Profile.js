import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Container } from '../components/Container';
import { ProfileHeader } from '../components/ProfileHeader';
import { Header } from 'react-native-elements';
import { ProfileBody } from '../components/ProfileBody';
import { AsyncStorage, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: {
        username: '',
        profile_picture: '',
        rating: 0,
        bio: '',
      },
      uid: '',
      mine: false,
      currentRoute: '',
    };
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  componentDidMount() {
    this.getProfileData();
  }

  // Listens to current route and re-renders if necessary
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRoute === 'Profile') {
      this.getProfileData();
      this.setState(this.state);
    }
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
          // console.log('Successfully got profile for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + uid);
        }
      })
      .then((data) => {
        this.setState({ user: data, uid: uid, loading: false });
      });
  };

  render() {
    const user = this.state.user;
    const uid = this.state.uid;

    // Need to check if uid and user are ok
    if (uid && user && !this.state.loading) {
      return (
        <Container color={false}>
          <StatusBar barStyle="light-content" />
          {!this.state.mine ? (<Header
            outerContainerStyles={styles.customSmallHeaderOuterContainerStyle}
            innerContainerStyles={styles.customSmallHeaderInnerContainerStyle}
            backgroundColor={EStyleSheet.value("$baseCoral")}
            leftComponent={
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                hitSlop={{ top: 0, bottom: 10, left: 50, right: 50 }}
              >
                <Icon name="chevron-left" color="white" size={20} />
              </TouchableOpacity>
            }
          />) : null}
          <View style={this.state.mine ? styles.profileView : styles.otherProfileView}>
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

// Get current route
const mapStateToProps = (state) => ({
  currentRoute: state.user.currentRoute,
});

export default connect(mapStateToProps)(Profile);
