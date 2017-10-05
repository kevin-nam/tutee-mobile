import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { HomeSearchBar } from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setWelcomeMessage = this.setWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: 'Welcome!',
      tempuid: '',
    };
  }

  // Runs before render
  componentWillMount() {
    this.setWelcomeMessage();
    this.tempFunc();
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  setWelcomeMessage = async () => {
    try {
      AsyncStorage.getItem('@MySuperStore:USER_NAME_KEY').then((name) => {
        if (name !== null) {
          this.setState({ welcomeMessage: 'Welcome ' + name + '!' });
        } else {
          // this.setState({welcomeMessage: 'Error getting your name !'});
        }
      });
    } catch (error) {
      console.log('Something went wrong when getting user name.');
    }
  };

  handlePressSearch = () => {
    console.log('Submitted search');
  };

  tempFunc = async () => {
    const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
    await this.setState({ tempuid: uid });
  };

  render() {
    let welcomeMessage = function(t) {
      return (
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>
          {t}
        </Text>
      );
    };

    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <HomeSearchBar
          onSubmit={() => this.props.navigation.navigate('SearchLandingPage')}
          // onSubmitEditing={this.handlePressSearch} // this.props.naviation.navigate('smallPost')
        />
        <KeyboardAvoidingView behavior="padding">
          <Text style={{ color: 'white', fontSize: 50, fontWeight: '600' }}>
            {welcomeMessage(this.state.welcomeMessage)}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() => this.props.navigation.navigate('SearchLandingPage')}
          >
            SmallPost
          </Text>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default Home;
