import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.any,
    color: PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={
            this.props.color ? styles.coralContainer : styles.grayContainer
          }
        >
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default Container;
