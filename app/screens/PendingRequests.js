import PropTypes from 'prop-types';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import {Container} from '../components/Container';
import {RequestCard} from '../components/RequestCard';
import store from '../store/store';

class PendingRequests extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      pendingConnections: [],
    }
  }

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
        console.log(data);

        const pendingConnections = [];

        Object.values(data.connections).forEach(function(connection) {
          if (connection.isPending && !connection.isRequesting) {
            pendingConnections.push(connection.uid);
          }
        });

        this.setState({
          loading: false,
          pendingConnections: pendingConnections,
        });
      });
  }

  render() {

    if (!this.state.loading) {

      const pendingCards = [];
      let i = 0;
      this.state.pendingConnections.forEach(function(connection) {
        pendingCards.push(<RequestCard key={i++} uid={connection} />)
      });



      return (
        <Container backgroundColor={'#9E768F'}>
          <ScrollView showsVerticalScrollIndicator={true} style={{
            flex: 1,
            width: '100%',
          }}>
            {pendingCards.length > 0 ? pendingCards : <Text>No pending requests </Text>}
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

export default PendingRequests;
