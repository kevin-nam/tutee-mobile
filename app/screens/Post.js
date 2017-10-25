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
      loading: true,
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
    };
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
        this.setState({
          user: data,
          post: this.props.navigation.state.params.post,
          loading: false,
        });
        console.log('Got user data', data);
        console.log('got state post', this.state);
      });
  };

  componentDidMount() {
    this.getFullPostData();
  }

  render() {
    if (!this.state.loading) {
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
    } else {
      return null;
    }
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default Post;
