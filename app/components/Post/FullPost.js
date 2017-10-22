import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import moment from 'moment';

import styles from './styles';

const FullPost = ({ post, user, navigation, edit }) => {
  user.profile_picture = require('./images/Placeholder.png');
  let editButton = edit ? (
    <Button
      color="yellow"
      title="Edit"
      onPress={() => {
        navigation.navigate('ModifyPost', { edit: true, post: post });
      }}
    />
  ) : (
    <Button
      color="green"
      title="Request"
      onPress={() => {
        alert('click!');
      }}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.author}>
          <Image
            resizeMode="cover"
            style={styles.icon}
            source={user.profile_picture}
            borderRadius={50}
          />
          <Text style={styles.user}>{user.username}</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Text>{post.description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.date}>
          {moment(post.date).format('MMMM D, YYYY')}
        </Text>
        {editButton}
      </View>
      <View style={styles.tagSection}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.tags}>{post.tagString}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

FullPost.propTypes = {
  post: PropTypes.object,
  user: PropTypes.object,
  navigation: PropTypes.object,
  edit: PropTypes.bool,
};

export default FullPost;
