import { Button } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

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
      <Button
        title="CREATE POST"
        raised
        iconLeft
        icon={{ name: 'add' }}
        onPress={() =>
          this.props.navigation.navigate('ModifyPost', {
            uid: this.props.uid,
            edit: false,
          })}
        backgroundColor={styles.$createButtonBackgroundColor}
        underlayColor={styles.$createButtonUnderlayColor}
        fontWeight="500"
        containerViewStyle={styles.containerViewStyle}
        borderRadius={100}
      />
    );
  }
}

export default CreatePostButton;
