import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const MessageBubble = ({messageData, isReceived}) => {

  // TODO: show date (when clicked on?)
  return (
    <View style={styles.messageContainer}>
      <View style={isReceived ? styles.notMyMessageView : styles.myMessageView}>
        <View style={styles.textView}>
          <Text style={isReceived ? styles.notMyMessageText : styles.myMessageText}>{messageData}</Text>
        </View>
      </View>
    </View>
  );
};

export default MessageBubble;
