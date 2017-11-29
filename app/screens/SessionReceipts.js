import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from 'react-native-elements';
import { SessionCard } from '../components/SessionCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import store from '../store/store';
import EStyleSheet from 'react-native-extended-stylesheet';

class SessionReceipts extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      sessions: {},
      user: {},
    };
  }

  async componentDidMount() {
    await this.getSessionData();
  }

  getSessionData = async () => {
    const uid = await store.getState().user.uid;
    fetch('http://138.197.159.56:3232/session/get/' + (await uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('sessions retrieved');
          return response.json();
        } else {
          console.log('Error when getting session data for ' + uid);
        }
      })
      .then((data) => {
        if (data) {
          this.setState({
            sessions: data,
          });
        } else {
          this.setState({
            sessions: {},
          });
        }
      });
  };

  getUserData = async (user) => {
    fetch('http://138.197.159.56:3232/user/getUser/' + (await user.uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + user.uid);
        }
      })
      .then((data) => {
        this.setState({ user: data });
      });
  };

  render() {
    const myUid = store.getState().user.uid;
    let list = [];
    if (this.state.sessions) {
      for (let session in this.state.sessions) {
        if (!this.state.sessions.hasOwnProperty(session)) continue;
        let uid = session.uid;
        if (myUid == session.uid) {
          uid = session.tid;
        }
        this.getUserData(uid);
        list.push(
          <SessionCard
            key={list.length}
            user={this.state.user}
            session={session}
          />
        );
      }
    }

    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <Header
          outerContainerStyles={styles.settingsHeaderOuterContainerStyle}
          innerContainerStyles={styles.customHeaderInnerContainerStyle}
          backgroundColor={EStyleSheet.value('$baseCoral')}
          centerComponent={
            <Text
              allowFontScaling={false}
              style={styles.customHeaderCenterComponentText}
            >
              Session Receipts
            </Text>
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.settingsScrollView}
          behavior="padding"
        >
          <ScrollView
            style={styles.searchLandingView}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.receiptContentView}>
              {list.length ? (
                list
              ) : (
                <Text
                  style={styles.receiptNoSessionText}
                  allowFontScaling={false}
                >
                  Looks like you haven't had any Sessions yet!
                </Text>
              )}
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default SessionReceipts;
