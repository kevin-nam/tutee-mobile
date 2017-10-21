import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import store from '../../store/store';
import PropTypes from 'prop-types';

class ConnectionCard extends React.Component {

  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      hidden: false,
    };
  }

  onPressHandler = () => {
    const myUid = store.getState().user.uid;
    this.props.navigation.navigate('Messaging', {
      fromUid: 'myUid',
      toUid: this.props.uid,
    })
  };

  // TODO: replace uid with user name
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onPressHandler}>
        <View style={this.state.hidden ? styles.hidden : styles.flexVertical}>
          <View style={styles.profileImageView}>
            <Image style={styles.profileImage} source={require('../MessagingHeader/default-user.jpg')}/>
          </View>
          <View style={styles.profileTextView}>
            <Text style={styles.profileText}>{this.props.uid}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default ConnectionCard;
