import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { AutoExpandingTextInput } from '../TextInput';
// import { NavigationActions } from 'react-navigation';

import styles from './styles';

class EditablePost extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      titleText: this.props.post.title,
      descriptionText: this.props.post.description,
      tagText: this.props.post.tagString,
    };
  }

  goToPost = (screen, params) => {
    console.log('Pressed Save');
    this.props.navigation.navigate(screen, params);
  };

  savePost = async () => {
    if (
      typeof this.state.titleText == 'undefined' ||
      typeof this.state.descriptionText == 'undefined' ||
      typeof this.state.tagText == 'undefined'
    ) {
      alert('Please make sure that every field has something written in it!');
    } else if (
      this.state.titleText.length == 0 ||
      this.state.descriptionText.length == 0 ||
      this.state.tagText.length == 0
    ) {
      alert('Please make sure that every field has something written in it!');
    } else {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
      if (this.props.edit) {
        fetch('http://138.197.159.56:3232/post/update/', {
          method: 'POST',
          body: JSON.stringify({
            pid: this.props.post.pid,
            uid: this.props.post.uid,
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
            this.goToPost('Post', {
              post: data,
              edited: true,
              search: this.props.searchedTags,
            });
            // console.log(data);
          });
      } else {
        fetch('http://138.197.159.56:3232/post/create/', {
          method: 'POST',
          body: JSON.stringify({
            uid: this.props.post.uid,
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
              // console.log(response);
              return response.json();
            } else {
              console.log('Error when creating post');
            }
          })
          .then((data) => {
            this.props.navigation.navigate('Post', {
              post: data.post,
              created: true,
            });
            // console.log(data);
          });
      }
      // this.props.navigation.navigate('Post', {});
    }
  };

  render() {
    const navigation = this.props.navigation;
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
            defaultValue={this.props.post.title}
            editable={true}
          />
        </View>
        <View style={styles.fullBody}>
          <AutoExpandingTextInput
            autoGrow={true}
            autoCapitalize={'sentences'}
            multiline={true}
            placeholder="Description"
            selectTextOnFocus={this.props.edit}
            defaultValue={this.props.post.description}
            style={styles.titleInput}
            onChangeText={(text) => {
              this.setState({ descriptionText: text });
            }}
          />
        </View>
        <View style={styles.tagSection}>
          <TextInput
            autoCapitalize={'sentences'}
            placeholder="#Tags"
            selectTextOnFocus={this.props.edit}
            style={styles.titleInput}
            onChangeText={(text) => {
              this.setState({ tagText: text });
            }}
            defaultValue={this.props.post.tagString}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => {
              navigation.goBack(null);
            }}
          >
            <Text allowFontScaling={false} style={styles.cancelMessageText}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => this.savePost()}
          >
            <Text allowFontScaling={false} style={styles.saveMessageText}>
              Save
            </Text>
          </TouchableOpacity>
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
