import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text } from 'react-native';
import { connect } from 'react-redux';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';

class Messaging extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  render() {
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() => this.props.navigation.navigate('Session')}
          >
            Session
          </Text>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Messaging));

export default Messaging;
