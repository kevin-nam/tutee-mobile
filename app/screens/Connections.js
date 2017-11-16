import PropTypes from 'prop-types';
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  RefreshControl,
  StatusBar,
  Image,
} from 'react-native';
import { Container } from '../components/Container';
import { ConnectionCard } from '../components/ConnectionCard';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../store/store';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class Connections extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      connections: [],
      refreshing: false,
    };
  }

  fetchData = () => {
    const uid = store.getState().user.uid;

    fetch('http://138.197.159.56:3232/connection/get/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error when getting connection data for ' + uid);
        }
      })
      .then((data) => {
        const connections = [];

        if (data.connections) {
          Object.values(data.connections).forEach(function(connection) {
            if (!connection.isPending) {
              connections.push({
                uid: connection.uid,
                isTutor: connection.isTutor,
              });
            }
          });
          this.setState({
            loading: false,
            connections: connections,
            refreshing: false,
          });
        } else {
          this.setState({
            loading: false,
            connections: connections,
            refreshing: false,
          });
        }
      });
  };

  _onRefresh() {
    this.setState({ refreshing: true });
    this.fetchData();
  }

  componentWillMount() {
    console.log('updating');
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if (!this.state.loading) {
      const navigation = this.props.navigation;
      const connectionCards = [];
      let i = 0;
      this.state.connections.forEach(function(connection) {
        connectionCards.push(
          <ConnectionCard
            key={i++}
            isTutor={connection.isTutor}
            uid={connection.uid}
            navigation={navigation}
          />
        );
      });

      let errorText = (
        <Text
          key="0"
          allowFontScaling={false}
          style={styles.searchLandingErrorText}
        >
          You currently have no connections!
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
          <StatusBar barStyle="light-content" />
          <Header
            outerContainerStyles={styles.customHeaderOuterContainerStyle}
            innerContainerStyles={styles.customHeaderInnerContainerStyle}
            backgroundColor={EStyleSheet.value('$baseCoral')}
            centerComponent={
              <Text
                allowFontScaling={false}
                style={styles.customHeaderCenterComponentText}
              >
                Connections
              </Text>
            }
            rightComponent={
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PendingRequests')}
              >
                <Icon name="user-plus" color="white" size={20} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={true}
            style={styles.customScrollView}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            {this.state.connections.length > 0
              ? connectionCards
              : [errorText, image]}
          </ScrollView>
        </Container>
      );
    } else {
      return null;
    }
  }
}

export default Connections;
