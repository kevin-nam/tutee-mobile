import PropTypes from 'prop-types';
import React from 'react';
import { Container } from '../components/Container';
import SessionRequest from '../components/SessionRequest/SessionRequest';

class Session extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const content = this.props.navigation.state.params.content;

    return (
      <Container backgroundColor="#9E768F">
        <SessionRequest navigation={this.props.navigation} content={content} />
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Session));

export default Session;
