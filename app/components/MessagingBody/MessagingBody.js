import React from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';

class MessagingBody extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => {
      this.view.scrollToEnd({ animated: false });
    }, 500);
  }

  render() {
    const msg = this.props.messages;

    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}
        ref={(input) => {
          this.view = input;
        }}
      >
        <View style={styles.flexHorizontal}>{msg}</View>
      </ScrollView>
    );
  }
}

export default MessagingBody;
