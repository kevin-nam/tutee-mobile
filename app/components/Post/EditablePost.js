import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { AutoExpandingTextInput } from '../TextInput';

import styles from './styles';

class EditablePost extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      titleText: '',
      descriptionText: '',
      tagText: '',
      navigation: this.props.navigation,
    };
  }

  savePost = async () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    if (this.props.edit) {
      fetch('http://138.197.159.56:3232/post/update/', {
        method: 'POST',
        body: JSON.stringify({
          pid: this.props.pid,
          uid: this.props.uid,
          title: this.state.titleText,
          description: this.state.descriptionText,
          tagString: this.state.tagText,
          type: 'tutor',
        }),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            console.log('success');
            return response.json();
          } else {
            console.log('Error when updating post');
          }
        })
        .then((data) => {
          this.props.navigation.navigate('Post', { post: data });
          // console.log(data);
        });
    } else {
      fetch('http://138.197.159.56:3232/post/create/', {
        method: 'POST',
        body: JSON.stringify({
          uid: this.props.uid,
          title: this.state.titleText,
          description: this.state.descriptionText,
          tagString: this.state.tagText,
          type: 'tutor',
        }),
        headers: headers,
      })
        .then((response) => {
          if (response.ok) {
            console.log('success');
            console.log(response);
            return response.json();
          } else {
            console.log('Error when creating post');
          }
        })
        .then((data) => {
          this.props.navigation.navigate('Post', { post: data.post });
          // console.log(data);
        });
    }
    // this.props.navigation.navigate('Post', {});
  };

  render() {
    const navigation = this.state.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            autoCapitalize={'sentences'}
            autoFocus={true}
            placeholder="Title"
            selectTextOnFocus={this.props.edit}
            style={styles.titleInput}
            onChangeText={(text) => {
              this.setState({ titleText: text });
            }}
            value={this.props.title}
          />
        </View>
        <View style={styles.body}>
          <AutoExpandingTextInput
            autoGrow={true}
            autoCapitalize={'sentences'}
            multiline={true}
            placeholder="Description"
            selectTextOnFocus={this.props.edit}
            value={this.props.content}
            style={styles.titleInput}
            onChangeText={(text) => {
              this.setState({ descriptionText: text });
            }}
            value={this.props.content}
          />
        </View>
        <View style={styles.tagSection}>
          <TextInput
            autoCapitalize={'sentences'}
            autoFocus={true}
            placeholder="Tags"
            selectTextOnFocus={this.props.edit}
            style={styles.titleInput}
            onChangeText={(text) => {
              this.setState({ tagText: text });
            }}
            value={this.props.tagString}
          />
        </View>
        <View style={styles.footer}>
          <Button
            color="red"
            title="Cancel"
            onPress={() => {
              navigation.goBack(null);
            }}
          />
          <Button color="green" title="Save" onPress={() => this.savePost()} />
        </View>
      </View>
    );
  }
}

EditablePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  tagString: PropTypes.string,
  edit: PropTypes.bool,
  uid: PropTypes.string,
  pid: PropTypes.string,
};

export default EditablePost;
