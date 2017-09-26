import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const FacebookLoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      underlayColor="#ccc"
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.wrapper}>
        <Icon name="facebook" size={26} color="white" />
        <Text style={styles.text}>Connect with Facebook</Text>
      </View>
    </TouchableOpacity>
  );
};

FacebookLoginButton.propTypes = {
  onPress: PropTypes.func,
};

export default FacebookLoginButton;