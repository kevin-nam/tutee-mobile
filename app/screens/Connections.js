import PropTypes from 'prop-types';
import React from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { ConnectionCard } from '../components/ConnectionCard';
import { Header, List, ListItem, Icon } from 'react-native-elements';
import store from '../store/store';

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
          console.log(response);
          console.log('Successfully got connection data for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting connection data for ' + uid);
        }
      })
      .then((data) => {
        const connections = [];

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

      return (
        <Container backgroundColor={'#9E768F'}>
          <Header
            statusBarProps={{
              barStyle: 'light-content',
              backgroundColor: 'black',
              translucent: true,
              height: 60,
            }}
            centerComponent={{ text: 'Connections' }}
            leftComponent={
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('PendingRequests')}
              >
                <Icon name="fiber-new" color="black" />
              </TouchableOpacity>
            }
          />

          <ScrollView
            showsVerticalScrollIndicator={true}
            style={{
              flex: 1,
              width: '100%',
              marginTop: 60,
            }}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh.bind(this)}
              />
            }
          >
            {connectionCards}
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: '600',
                textDecorationLine: 'underline',
              }}
              onPress={() =>
                this.props.navigation.navigate('Messaging', {
                  fromUid: 'fromMe',
                  toUid: 'tutee',
                  isTutor: true,
                })}
            >
              Messaging Test
            </Text>
          </ScrollView>
        </Container>
      );
    } else {
      return null;
    }
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Connections));

export default Connections;
