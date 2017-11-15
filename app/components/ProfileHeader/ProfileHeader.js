import React from 'react';
import { Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const ProfileHeader = ({ user }) => {
  console.log(user);
  return (
    <View style={styles.flexHorizontal}>
      <View style={styles.profileImageView}>
        <Image
          style={styles.profileImage}
          resizeMode="cover"
          source={{ uri: user.profile_picture }}
        />
      </View>
      <View style={styles.profileInfo}>
        <Text allowFontScaling={false} style={styles.profileText}>
          {user.username}
        </Text>

        {user.rating !== -1 ? (
          <View style={styles.ratingView}>
            <Rating
              readonly
              ratingImage={require('../../../assets/images/star.png')}
              imageSize={18}
              ratingColor={EStyleSheet.value('$baseYellow')}
              ratingBackgroundColor={EStyleSheet.value('$baseCoral')}
              fractions={1}
              showRating={false}
              ratingCount={user.rating}
              type="custom"
              startingValue={user.rating}
              onFinishRating={() => {}}
            />
            <Text allowFontScaling={false} style={styles.ratingText}>
              ({user.numOfRatings})
            </Text>
          </View>
        ) : (
          <Text allowFontScaling={false} style={styles.notRatedYetText}>
            New Tutor!
          </Text>
        )}
      </View>
    </View>
  );
};

export default ProfileHeader;
