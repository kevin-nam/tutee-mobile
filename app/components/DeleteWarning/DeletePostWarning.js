import PropTypes from 'prop-types';
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './styles';

class DeletePostWarning extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      navigation: this.props.navigation,
    };
  }

  deletePost = async (pid) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    fetch('http://138.197.159.56:3232/post/delete/' + (await pid), {
      method: 'DELETE',
      headers: headers,
    }).then((response) => {
      console.log('PID', pid);
      console.log('RES', response);
      if (response.ok) {
        console.log('Successfully deleted post ' + pid);
        this.goBack();
      } else {
        console.log('Error when deleting post ' + pid);
      }
    });
  };

  goBack = () => {
    console.log('Pressed back');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    this.props.navigation.dispatch(resetAction);
  };

  onPressDelete = () => {
    Alert.alert(
      'Are you sure you want to delete this post?',
      'This is permanent and cannot be undone later.',
      [
        {
          text: 'Delete',
          onPress: () => this.deletePost(this.props.pid),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      { cancelable: true }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.warningTitle}>Warning!</Text>
        <Text style={styles.warningDesc}>
          This section is for deleting the post.
        </Text>
        <Button
          color="red"
          title="Delete Post"
          onPress={() => {
            this.onPressDelete();
          }}
        />
      </View>
    );
  }
}

export default DeletePostWarning;
