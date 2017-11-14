import React from 'react';
import { Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import styles from './styles';

const ProfileHeader = ({ user }) => {
  console.log(user);
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        <Image
          style={styles.profileImage}
          resizeMode='cover'
          source={{uri: user.profile_picture}}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileText}>{user.username}</Text>

        {user.rating !== -1 ?
          <View style={styles.ratingView}>
            <Rating
              readonly
              imageSize={24}
              showRating={false}
              fractions={1}
              type="star"
              startingValue={user.rating}
              onFinishRating={() => {
              }}
            />
            <Text style={styles.ratingText}>({user.numOfRatings})</Text>
          </View>
          : <Text style = {styles.notRatedYetText}>Not yet rated</Text>
        }
      </View>
    </View>
  );
};

export default ProfileHeader;
