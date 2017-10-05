import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { FullPost } from '../components/Post';

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
        rating: 0,
        bio: '',
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

  componentWillMount() {
    console.log(this.props);
    this.getFullPostData();
  }

  getFullPostData = async () => {
    const uid = await this.props.navigation.state.params.post.uid;
    fetch('http://138.197.159.56:3232/user/getUser/' + (await uid), {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          console.log('Successfully got profile for ' + uid);
          return response.json();
        } else {
          console.log('Error when getting profile data for ' + uid);
        }
      })
      .then((data) => {
        this.setState({ user: data });
        this.setState({ post: this.props.navigation.state.params.post });
        console.log('Got user profile data', data);
      });
  };

  render() {
    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <ScrollView showsVerticalScrollIndicator={false}>
            <FullPost
              title={this.props.navigation.state.params.post.title}
              userImage={this.state.user.profile_picture}
              userName={this.state.user.username}
              content={this.props.navigation.state.params.post.description}
              date={this.props.navigation.state.params.post.date}
              tagString={this.props.navigation.state.params.post.tagString}
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
