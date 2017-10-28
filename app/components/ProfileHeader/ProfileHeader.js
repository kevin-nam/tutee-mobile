import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const ProfileHeader = ({ user }) => {
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        <Image
          style={styles.profileImage}
          resizeMode='stretch'
          source={{uri: user.profile_picture}}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>{user.username}</Text>
        <Text style={styles.profileText}>Rating: {user.rating}</Text>
      </View>
    </View>
  );
};

export default ProfileHeader;
