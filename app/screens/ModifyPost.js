import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { EditablePost } from '../components/Post';
import { DeletePostWarning } from '../components/DeleteWarning';

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
    let deletePost = this.state.edit ? (
      <DeletePostWarning
        pid={this.state.post.pid}
        navigation={this.props.navigation}
        backAction={backAction}
      />
    ) : null;
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <EditablePost
              post={this.state.post}
              edit={this.state.edit}
              navigation={this.props.navigation}
            />
            {deletePost}
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default ModifyPost;
