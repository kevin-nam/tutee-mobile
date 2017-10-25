import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const MessagingHeader = ({ username, uid, navigation, isTutor }) => {

  // TODO: replace profile image with actual image
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        <Image style={styles.profileImage} source={require('./default-user.jpg')}/>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>
          {username}
        </Text>
      </View>
      <View style={isTutor ? styles.requestBtnView : styles.hideRequestBtnViw}>
        <TouchableOpacity onPress={() => navigation.navigate('StartASession', {username: username, uid: uid})}>
          <Text style={styles.requestBtnText}>Start a session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagingHeader;
