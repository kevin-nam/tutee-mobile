import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class MessagingBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  onPressHandler = () => {
    if (this.state.text) {
      this.props.displayNewMessage(this.state.text);
      this.textInput.clear();
    }
  };

  render() {
    return (
      <View style={styles.flexHorizontal}>
        <TextInput
          onChangeText={(text) => this.setState({ text: text })}
          placeholder="Aa"
          style={styles.bar}
          ref={(input) => {
            this.textInput = input;
          }}
          multiline={true}
          maxLength={100}
        />
        <TouchableOpacity onPress={this.onPressHandler}>
          <Icon style={styles.sendBtn} name="chevron-circle-right" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default MessagingBar;
