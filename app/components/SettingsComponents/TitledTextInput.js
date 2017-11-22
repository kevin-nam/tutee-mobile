import React from 'react';
import { TextInput, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class TitledTextInput extends React.Component {
  static propTypes = {
    onChangeText: PropTypes.func,
    text: PropTypes.string,
    multiline: PropTypes.bool,
    defaultVal: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      height: 0,
    };
  }

  render() {
    return (
      <View style={styles.titledTextInputView}>
        <Text style={styles.titleText}>{this.props.text}</Text>
        {this.props.multiline ? (
          <TextInput
            autoGrow={false}
            autoCapitalize={'sentences'}
            multiline={true}
            selectTextOnFocus={true}
            defaultValue={this.props.defaultVal}
            onContentSizeChange={(event) => {
              this.setState({ height: event.nativeEvent.contentSize.height });
            }}
            style={[styles.titledTextInput, { height: this.state.height }]}
            onChangeText={this.props.onChangeText}
          />
        ) : (
          <TextInput
            defaultValue={this.props.defaultVal}
            onChangeText={this.props.onChangeText}
            style={styles.titledTextInput}
            selectTextOnFocus={true}
          />
        )}
      </View>
    );
  }
}

export default TitledTextInput;
