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

    return (
      <Container color={false}>
        <InSessionView navigation={this.props.navigation} content={content} />
      </Container>
    );
  }
}

export default InSession;
