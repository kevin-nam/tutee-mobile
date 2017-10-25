import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Container } from '../components/Container';
import { HomeSearchBar } from '../components/SearchBar';
import store from '../store/store';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setWelcomeMessage = this.setWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: 'Welcome!',
      tempuid: '',
      searchedTags: '',
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
      const name = store.getState().user.username;
      this.setState({ welcomeMessage: 'Welcome ' + name + '!' });
    } catch (error) {
      console.log('Something went wrong when getting user name.');
    }
  };

  handlePressSearch = (value) => {
    if (this.state.searchedTags.length != 0) {
      console.log('Submitted search');

      this.props.navigation.navigate('SearchLandingPage', {
        tagList: this.state.searchedTags,
      });
    } else {
      alert('Please enter search tags!');
    }
  };

  handleTextChange = (text) => {
    // console.log(text);
    this.setState({ searchedTags: text });
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
          onSubmit={this.handlePressSearch}
          onText={this.handleTextChange}
        />
        <KeyboardAvoidingView behavior="padding">
          <Text style={{ color: 'white', fontSize: 50, fontWeight: '600' }}>
            {welcomeMessage(this.state.welcomeMessage)}
          </Text>
          <Button
            color="blue"
            title="Create Post"
            onPress={() =>
              this.props.navigation.navigate('ModifyPost', {
                uid: this.state.tempuid,
                edit: false,
              })}
            style={{ fontSize: 14, fontWeight: '500' }}
          />
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
