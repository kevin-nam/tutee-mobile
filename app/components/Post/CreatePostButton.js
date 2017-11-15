import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

class CreatePostButton extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    uid: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('CreatePost', {
            uid: this.props.uid,
            edit: false,
          })}
        style={styles.createPostBtnContainer}
        activeOpacity={0.5}
      >
        <View style={styles.createPostBtnWrapper}>
          <Icon name="plus" size={20} color="white" />
          <Text allowFontScaling={false} style={styles.createPostBtnText}>
            Create Post
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CreatePostButton;
