import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import moment from 'moment';

import styles from './styles';

const SmallPost = ({
  title,
  userImage,
  content,
  date,
  onPress,
  onImagePress,
}) => {
  if (!userImage) {
    userImage = require('./images/Placeholder.png');
  } else {
    userImage = { uri: userImage };
  }

  return (
    <View style={styles.smallContainer}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.smallHeader}>
          <TouchableHighlight style={styles.touchableImageSmall} onPress={onImagePress}>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                resizeMode="cover"
                style={styles.smallIcon}
                source={userImage}
                borderRadius={25}
              />
            </View>
          </TouchableHighlight>
          <Text allowFontScaling={false} style={styles.smallTitle}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>

      <View style={styles.smallBody}>
        <Text
          allowFontScaling={false}
          numberOfLines={2}
          ellipsizeMode="tail"
          style={styles.content}
        >
          {content}
        </Text>
      </View>
      <View style={styles.smallFooter}>
        <Text allowFontScaling={false} style={styles.date}>
          {moment(date).format('MMMM D, YYYY')}
        </Text>
      </View>
    </View >
  );
};

SmallPost.propTypes = {
  title: PropTypes.string,
  userImage: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  onPress: PropTypes.func,
  onImagePress: PropTypes.func,
};

export default SmallPost;
