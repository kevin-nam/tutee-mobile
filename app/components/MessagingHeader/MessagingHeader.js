import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const MessagingHeader = ({ username, uid, navigation, isTutor, isInverseUidRef, profile_picture }) => {

  // TODO: replace profile image with actual image
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        {profile_picture ? <Image style={styles.profileImage} source={{uri: profile_picture }}/> : <Image style={styles.profileImage} source={require('./default-user.jpg')}/>}
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>
          {username}
        </Text>
      </View>
      <View style={isTutor ? styles.requestBtnView : styles.hideRequestBtnViw}>
        <TouchableOpacity onPress={() => navigation.navigate('StartASession', {profile_picture: profile_picture, username: username, uid: uid, isInverseUidRef: isInverseUidRef})}>
          <Text style={styles.requestBtnText}>Start a session</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagingHeader;
