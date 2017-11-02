import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class FacebookLoginButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={styles.container}
        activeOpacity={0.5}
      >
        <View style={styles.wrapper}>
          <Icon name="facebook" size={26} color="white" />
          <Text style={styles.text}>Connect with Facebook</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default FacebookLoginButton;
