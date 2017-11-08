import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const MessageBubble = ({messageData, isReceived, sentBy}) => {

  // TODO: show date (when clicked on?)

  if (sentBy === 'system') {
    return (
      <View style={styles.messageContainer}>
        <View style={styles.systemMessageView}>
          <View style={styles.textView}>
            <Text style={styles.systemText}>{messageData}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.messageContainer}>
        <View style={isReceived ? styles.notMyMessageView : styles.myMessageView}>
          <View style={styles.textView}>
            <Text style={isReceived ? styles.notMyMessageText : styles.myMessageText}>{messageData}</Text>
          </View>
        </View>
      </View>
    );
  }
};

export default MessageBubble;
