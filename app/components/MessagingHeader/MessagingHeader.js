import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

const MessagingHeader = ({
  username,
  uid,
  navigation,
  isTutor,
  isInverseUidRef,
  profile_picture,
  dbref,
}) => {
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.backBtnView}>
        <TouchableOpacity
          onPress={() => {
            dbref.off();
            navigation.goBack();
          }}
          hitSlop={{ top: 0, bottom: 10, left: 50, right: 30 }}
        >
          <Icon name="arrow-back" color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileImageView}>
        {profile_picture ? (
          <Image
            borderRadius={25}
            resizeMode="cover"
            style={styles.profileImage}
            source={{ uri: profile_picture }}
          />
        ) : (
          <Image
            borderRadius={25}
            resizeMode="cover"
            style={styles.profileImage}
            source={require('./default-user.jpg')}
          />
        )}
      </View>
      <View style={styles.profileInfo}>
        <Text allowFontScaling={false} style={styles.profileText}>
          {username}
        </Text>
      </View>
      <View style={isTutor ? styles.requestBtnView : styles.hideRequestBtnViw}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('StartASession', {
              profile_picture: profile_picture,
              username: username,
              uid: uid,
              isInverseUidRef: isInverseUidRef,
            })}
        >
          <Text allowFontScaling={false} style={styles.requestBtnText}>
            Start a session
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagingHeader;
