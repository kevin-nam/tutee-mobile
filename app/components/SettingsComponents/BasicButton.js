import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import EStyleSheet from 'react-native-extended-stylesheet';

class BasicButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    iconName: PropTypes.string,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        disabled={this.props.disabled}
        onPress={this.props.onPress}
      >
        <Text allowFontScaling={false} style={styles.buttonText}>
          {this.props.text}
        </Text>
        {this.props.iconName ? (
          <Icon
            name={this.props.iconName}
            color={EStyleSheet.value('$baseGray')}
            size={20}
          />
        ) : null}
      </TouchableOpacity>
    );
  }
}

export default BasicButton;
