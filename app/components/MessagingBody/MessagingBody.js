import React from 'react';
import {View, ScrollView} from 'react-native';

import styles from './styles';

class MessagingBody extends React.Component {

  constructor(props) {
    super(props);
  }

  scrollToBottom = () => {
    this.view.scrollToEnd({animated: false});
  }

  componentDidMount() {
    setTimeout(() => {
      this.scrollToBottom();
    }, 500);
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const msg = this.props.messages;

    return (
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        ref={input => {
          this.view = input
        }}>
        <View style={styles.flexHorizontal}>
          {msg}
        </View>
      </ScrollView>
    );
  }
}

export default MessagingBody;
