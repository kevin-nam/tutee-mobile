import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const MessagingHeader = () => {
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        <Image style={styles.profileImage} source={require('./default-user.jpg')}/>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>
          Vittorio Guerrera
        </Text>
      </View>
    </View>
  );
};

export default MessagingHeader;