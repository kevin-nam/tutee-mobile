import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';

import styles from './styles';

const FullPost = ({ title, userImage, userName, content, date, tagString }) => {
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
            borderRadius={50}
          />
          <Text style={styles.user}>{userName}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>{content}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>{date}</Text>
        <Button
          color="green"
          title="Request"
          onPress={() => {
            alert('click!');
          }}
        />
      </View>
      <View style={styles.tagSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.tags}>{tagString}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

FullPost.propTypes = {
  title: PropTypes.string,
  userImage: PropTypes.element,
  userName: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  tagString: PropTypes.string,
};

export default FullPost;
