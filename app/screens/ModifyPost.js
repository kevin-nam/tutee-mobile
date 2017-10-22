import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
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
    };
  }

  componentWillMount() {
    console.log(this.props.navigation.state.params.post);
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
    let deletePost = this.state.edit ? <DeletePostWarning /> : null;
    console.log('post stuff', this.state.post);
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
