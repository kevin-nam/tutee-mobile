import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Text,
  View,
  ScrollView,
  RefreshControl,
  AsyncStorage,
} from 'react-native';
import { CreatePostButton } from '../components/Post';
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
      this.setState({ welcomeMessage: 'Welcome, \n' + name + '!' });
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
        <Text
          style={{
            fontFamily: 'Poppins-BoldItalic',
            textAlign: 'center',
            color: '#777777',
            fontSize: 24,
          }}
        >
          {t}
        </Text>
      );
    };

    const navigate = this.props.navigation;
    let pendingCards = (
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          textAlign: 'center',
          color: '#777777',
        }}
      >
        No pending sessions
      </Text>
    );
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
            navigation={navigate}
          />
        );
        console.log(session);
      });
    }

    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <HomeSearchBar
          onSubmit={this.handlePressSearch}
          onText={this.handleTextChange}
        />
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <ScrollView
            style={{ marginTop: 60, flex: 1 }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            <KeyboardAvoidingView behavior="padding">
              {welcomeMessage(this.state.welcomeMessage)}
            </KeyboardAvoidingView>
            <View style={{ width: '100%' }}>
              <Text
                style={{
                  fontFamily: 'Poppins-Regular',
                  textAlign: 'center',
                  color: '#777777',
                }}
              >
                Pending Sessions
              </Text>
              {pendingCards}
            </View>
            <CreatePostButton
              navigation={this.props.navigation}
              uid={this.state.tempuid}
            />
          </ScrollView>
        </View>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default Home;
