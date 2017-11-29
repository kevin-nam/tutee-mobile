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
      sessions: [],
      loading: true,
    };
  }

  componentDidMount() {
    const uid = store.getState().user.uid;

    fetch('http://138.197.159.56:3232/session/get/' + uid, {
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
        const sessions = [];
        if (data) {
          Object.values(data).forEach((obj, index) => {
            const myUid = store.getState().user.uid;
            let uid = obj.uid;
            if (myUid == obj.uid) {
              uid = obj.tid;
            }
            this.getUserData(uid, (user) => {
              if (user) {
                sessions.push(
                  <SessionCard key={index} user={user} session={obj} />
                );
                this.setState({
                  sessions: sessions,
                });
              }
            });
          });
        }
      });
    this.setState({
      loading: false,
    });
  }

  getUserData = (uid, callback) => {
    fetch('http://138.197.159.56:3232/user/getUser/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('response', response);
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + uid);
        }
      })
      .then((data) => {
        if (data) {
          console.log('data', data);
          callback(data);
        } else {
          callback(null);
        }
      });
  };

  render() {
    console.log(this.state.sessions);
    console.log(this.state.list);
    if (!this.state.loading) {
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
              <TouchableOpacity
                onPress={() => this.props.navigation.goBack()}
                hitSlop={{ top: 0, bottom: 10, left: 50, right: 50 }}
              >
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
                {this.state.sessions.length ? (
                  this.state.sessions
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
    } else return null;
  }
}

export default SessionReceipts;
