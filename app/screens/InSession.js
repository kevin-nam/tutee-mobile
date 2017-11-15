import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../components/Container';
import { InSessionView } from '../components/InSessionView';

class InSession extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.navigation.state.params.content;
    const username = this.props.navigation.state.params.username;

    return (
      <Container color={false}>
        <InSessionView
          navigation={this.props.navigation}
          content={content}
          username={username}
        />
      </Container>
    );
  }
}

export default InSession;
