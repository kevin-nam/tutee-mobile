import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { EditablePost } from '../components/Post';

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
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <EditablePost
              title={this.state.post.title}
              content={this.state.post.description}
              tagString={this.state.post.tagString}
              edit={this.state.edit}
              uid={this.state.post.uid}
              pid={this.state.post.pid}
            />
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
