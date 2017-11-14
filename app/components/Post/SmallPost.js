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
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.smallHeader}>
          <TouchableHighlight onPress={onImagePress}>
            <Image
              resizeMode="cover"
              style={styles.icon}
              source={userImage}
              borderRadius={25}
            />
          </TouchableHighlight>
          <Text style={styles.smallTitle}>{title}</Text>
        </View>
      </TouchableHighlight>

      <View style={styles.body}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.content}>
          {content}
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{moment(date).format('MMMM D, YYYY')}</Text>
      </View>
    </View>
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
