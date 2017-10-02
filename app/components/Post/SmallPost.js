import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const SmallPost = ({ title, userImage, content, date }) => {
  if (!userImage) {
    userImage = require('./images/Placeholder.png');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.smallAuthor}>
          <Image
            resizeMode="cover"
            style={styles.icon}
            source={userImage}
            borderRadius={50}
          />
          <Text numberOfLines={3}>
            <Text ellipsizeMode="tail">{content}</Text>
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

SmallPost.propTypes = {
  title: PropTypes.string,
  userImage: PropTypes.element,
  content: PropTypes.string,
  date: PropTypes.string,
};

export default SmallPost;
