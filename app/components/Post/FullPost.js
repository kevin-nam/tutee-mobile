import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

const FullPost = ({ backGround }) => {
  const containerStyles = [styles.container];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Title</Text>
        <Image />
        <Text />
      </View>
      <Text />
      <Text />
      <Button
        color="green"
        title="Dummy"
        onPress={() => {
          alert('click!');
        }}
      />
    </View>
  );
};

FullPost.propTypes = {};

export default FullPost;
