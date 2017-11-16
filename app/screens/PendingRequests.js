import PropTypes from 'prop-types';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native';
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

        if (data.connections) {
          Object.values(data.connections).forEach((connection) => {
            if (connection.isPending && !connection.isRequesting) {
              // Get Profile Data for each pending connection
              this.getProfileData(connection.uid, (user) => {
                pendingConnections.push({user: user, uid: connection.uid});

                this.setState({
                  pendingConnections: pendingConnections,
                });
              });
            }
          });
        }

        this.setState({
          loading: false,
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

      let errorText = (
        <Text
          key="0"
          allowFontScaling={false}
          style={styles.searchLandingErrorText}
        >
          {
            '\n No pending connection requests? \n Guess you\'ll have to settle for me! \n (◕‿◕✿)'
          }
        </Text>
      );

      let image = (
        <Image
          style={styles.pendingRequestImage}
          key="1"
          source={require('../../assets/images/corgimomo.png')}
        />
      );

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
              <TouchableOpacity onPress={() => this.goBack()}>
                <Icon name="chevron-left" color="white" size={20} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={true}
            style={styles.customScrollView}
            contentContainerStyle={styles.customScrollViewContainer}
          >
            {pendingCards.length > 0 ? pendingCards : [errorText, image]}
          </ScrollView>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default PendingRequests;
