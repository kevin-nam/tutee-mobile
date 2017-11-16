import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Container } from '../components/Container';
import { EditablePost } from '../components/Post';
import { DeletePostWarning } from '../components/DeleteWarning';
import styles from './styles';

class ModifyPost extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      post: {
        pid: '',
        uid: '',
        title: '',
        description: '',
        tagString: '',
        type: '',
        date: '',
      },
      edit: false,
      navigation: this.props.navigation,
    };
  }

  componentWillMount() {
    if (this.props.navigation.state.params.edit) {
      this.setState({ edit: this.props.navigation.state.params.edit });
      this.setState({ post: this.props.navigation.state.params.post });
    } else {
      this.setState({
        post: {
          uid: this.props.navigation.state.params.uid,
        },
      });
    }
  }

  render() {
    const backAction = NavigationActions.back({
      key: 'SearchLandringPage',
    });
    let search = this.props.navigation.state.params.search;
    let deletePost = this.state.edit ? (
      <DeletePostWarning
        pid={this.state.post.pid}
        navigation={this.props.navigation}
        backAction={backAction}
      />
    ) : null;
    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <EditablePost
              post={this.state.post}
              edit={this.state.edit}
              navigation={this.props.navigation}
              searchedTags={search}
            />
            <View style={styles.deletePostView}>{deletePost}</View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default ModifyPost;
