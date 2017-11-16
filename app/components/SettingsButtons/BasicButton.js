import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class BasicButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text allowFontScaling={false} style={styles.settingsBtn}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default BasicButton;
