import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const DeletePostWarning = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.warningTitle}>Warning!</Text>
      <Text style={styles.warningDesc}>
        This section is for deleting the post.
      </Text>
      <Button color="red" title="Delete Post" onPress={() => <Modal />} />
    </View>
  );
};

DeletePostWarning.propTypes = {
  navigation: PropTypes.object,
};

export default DeletePostWarning;
