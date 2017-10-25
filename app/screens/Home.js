import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Text,
  Button,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import { Container } from '../components/Container';
import { SessionCard } from '../components/SessionCard';
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
      loading: true,
      pendingSessions: [],
      refreshing: false,
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

  componentDidMount() {
    this.getPendingSessions();
  }

  getPendingSessions = () => {
    const uid = store.getState().user.uid;

    fetch('http://138.197.159.56:3232/session/get/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Successfully got session data for ' + uid);
          if (response._bodyText) {
            return response.json();
          }
        } else {
          console.log('Error when getting session data for ' + uid);
        }
      })
      .then((data) => {
        if (data) {
          const pendingSessions = [];

          Object.entries(data).forEach(([key, value]) => {
            if (value.status == 'PENDING') {
              pendingSessions.push({
                sid: key,
                tid: value.tid,
                duration: value.duration,
                rate: value.rate,
              });
            }
          });

          this.setState({
            loading: false,
            pendingSessions: pendingSessions,
            refreshing: false,
          });
        }
      });
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    this.getPendingSessions();
  }

  render() {
    let welcomeMessage = function(t) {
      return (
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>
          {t}
        </Text>
      );
    };

    let pendingCards = <Text>No pending sessions</Text>;
    if (!this.state.loading && this.state.pendingSessions.length > 0) {
      pendingCards = [];
      let i = 0;
      this.state.pendingSessions.forEach(function(session) {
        pendingCards.push(
          <SessionCard
            key={i++}
            sid={session.sid}
            tid={session.tid}
            duration={session.duration}
            rate={session.rate}
          />
        );
        console.log(session);
      });
    }

    return (
      <ScrollView
        style={{ marginTop: 60 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
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
          <View style={{ width: '100%' }}>
            <Text>Pending Sessions</Text>
            {pendingCards}
          </View>
        </Container>
      </ScrollView>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default Home;
