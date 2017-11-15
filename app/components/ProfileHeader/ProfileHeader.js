import React from 'react';
import { Text, View, Image } from 'react-native';
import { Rating } from 'react-native-elements';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types';

class ProfileHeader extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.user);
    return (
      <View style={styles.flexHorizontal}>
        <View style={styles.profileImageView}>
          <Image
            style={styles.profileImage}
            resizeMode="cover"
            source={{ uri: this.props.user.profile_picture }}
          />
        </View>
        <View style={styles.profileInfo}>
          <Text allowFontScaling={false} style={styles.profileText}>
            {this.props.user.username}
          </Text>
          <Icon
            name="cog"
            size={15}
            color={EStyleSheet.value('$grayLighten40')}
            onPress={this.props.navigation.navigate('Settings')}
            style={styles.settingsBtn}
          />
          {this.props.user.rating !== -1 ? (
            <View style={styles.ratingView}>
              <Rating
                readonly
                ratingImage={require('../../../assets/images/star.png')}
                imageSize={18}
                ratingColor={EStyleSheet.value('$baseYellow')}
                ratingBackgroundColor={EStyleSheet.value('$baseCoral')}
                fractions={1}
                showRating={false}
                ratingCount={this.props.user.rating}
                type="custom"
                startingValue={this.props.user.rating}
                onFinishRating={() => {}}
              />
              <Text allowFontScaling={false} style={styles.ratingText}>
                ({this.props.user.numOfRatings})
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
  }
}

export default ProfileHeader;
