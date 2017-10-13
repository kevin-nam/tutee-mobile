import React from 'react';
import {Text, ScrollView, Image} from 'react-native';
import {MessageBubble} from '../MessageBubble';

import styles from './styles';

class MessagingBody extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const msg = this.props.messages;
    return (
      <ScrollView showsVerticalScrollIndicator={true} style={styles.flexHorizontal}>
        {msg}
      </ScrollView>
    );
  }
}

export default MessagingBody;
