import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { FullPost } from '../components/Post';
import store from '../store/store';

class Post extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      user: {
        username: '',
        profile_picture: '',
      },
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
    this.getFullPostData();
  }

  getFullPostData = async () => {
    const uid = await this.props.navigation.state.params.post.uid;
    fetch('http://138.197.159.56:3232/user/getUser/' + (await uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Successfully got data for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting user data for ' + uid);
        }
      })
      .then((data) => {
        this.setState({ user: data });
        this.setState({ post: this.props.navigation.state.params.post });
        console.log('Got user data', data);
      });
  };

  render() {
    const currentUid = store.getState().user.uid;
    if (this.state.post.uid === currentUid) {
      this.state.edit = true;
    }
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <FullPost
              post={this.state.post}
              user={this.state.user}
              navigation={this.props.navigation}
              edit={this.state.edit}
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

export default Post;
