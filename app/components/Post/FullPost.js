import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

const FullPost = ({ title, userImage, userName }) => {
  if (!userImage) {
    userImage = require('./images/Placeholder.png');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.author}>
          <Image
            resizeMode="cover"
            style={styles.icon}
            source={userImage}
            borderRadius={40}
          />
          <Text style={styles.user}>{userName}</Text>
        </View>
      </View>
      <Text />
      <Text />
      <Button
        color="green"
        title="Request"
        onPress={() => {
          alert('click!');
        }}
      />
    </View>
  );
};

FullPost.propTypes = {
  title: PropTypes.string,
  userImage: PropTypes.element,
  userName: PropTypes.string,
};

export default FullPost;
