import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import { RequestCard } from '../components/RequestCard';
import { Header } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import store from '../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';

class PendingRequests extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pendingConnections: [],
    };
  }

  goBack = () => {
    console.log('Pressed back');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Connections' })],
    });
    this.props.navigation.dispatch(resetAction);
  };

  componentDidMount() {
    const uid = store.getState().user.uid;

    fetch('http://138.197.159.56:3232/connection/get/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Successfully got connection data for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting connection data for ' + uid);
        }
      })
      .then((data) => {
        const pendingConnections = [];
        Object.values(data.connections).forEach((connection) => {
          if (connection.isPending && !connection.isRequesting) {
            // Get Profile Data for each pending connection
            this.getProfileData(connection.uid, (user) => {
              pendingConnections.push({ user: user, uid: connection.uid });

              this.setState({
                loading: false,
                pendingConnections: pendingConnections,
              });
            });
          }
        });
      });
  }

  getProfileData = (uid, callback) => {
    fetch('http://138.197.159.56:3232/user/getUser/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok && response._bodyInit) {
          return response.json();
        } else {
          console.log('Error when getting user data for ' + uid);
          callback({
            profile_picture: '',
            username: uid,
          });
        }
      })
      .then((data) => {
        if (data) {
          callback(data);
        } else {
          callback({
            profile_picture: '',
            username: uid,
          });
        }
      });
  };

  render() {
    if (!this.state.loading) {
      const pendingCards = [];
      let i = 0;
      this.state.pendingConnections.forEach(function(connection) {
        pendingCards.push(
          <RequestCard key={i++} user={connection.user} uid={connection.uid} />
        );
      });

      return (
        <Container color={false}>
          <Header
            outerContainerStyles={styles.customHeaderOuterContainerStyle}
            innerContainerStyles={styles.customHeaderInnerContainerStyle}
            backgroundColor={EStyleSheet.value('$baseCoral')}
            centerComponent={
              <Text
                allowFontScaling={false}
                style={styles.customHeaderCenterComponentText}
              >
                Pending Connection Requests
              </Text>
            }
            leftComponent={
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="chevron-left" color="white" size={20} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={true}
            style={styles.customScrollView}
          >
            {pendingCards.length > 0 ? (
              pendingCards
            ) : (
              <Text allowFontScaling={false}>No pending requests </Text>
            )}
          </ScrollView>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default PendingRequests;
