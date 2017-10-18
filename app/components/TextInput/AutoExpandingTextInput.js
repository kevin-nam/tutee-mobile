import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import React from 'react';

import styles from './styles';

class AutoExpandingTextInput extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <TextInput
        {...this.props}
        onContentSizeChange={(event) => {
          this.setState({ height: event.nativeEvent.contentSize.height });
        }}
        style={[styles.textInput, { height: this.state.height }]}
      />
    );
  }
}

export default AutoExpandingTextInput;
