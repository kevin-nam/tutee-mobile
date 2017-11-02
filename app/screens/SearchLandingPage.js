import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Text,
} from 'react-native';
import { List } from 'react-native-elements';
// import { connect } from 'react-redux';

// import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { SmallPost } from '../components/Post';

class SearchLandingPage extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      tagString: '',
      postList: [],
      navigation: this.props.navigation,
      loading: true,
    };
  }

  componentDidMount() {
    this.getPostListData();
  }

  getPostListData = () => {
    console.log(
      'Getting this on the search landing page: ' +
        this.props.navigation.state.params.tagList
    );

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    fetch('http://138.197.159.56:3232/search/tags', {
      method: 'POST',
      body: JSON.stringify({
        tagString: this.props.navigation.state.params.tagList,
      }),
      // JSON.stringify(this.props.navigation.state.postList),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error searching for posts.');
        }
      })
      .then((data) => {
        // Get Profile Data for each found post
        const postList = [];
        let i = 0;
        data.forEach((post) => {
          this.getProfileData(post.uid, (userData) => {
            console.log(userData);
            postList.push({ user: userData, post: post });

            // If last profile to get
            if (++i === data.length) {
              this.setState({ postList: postList, loading: false });
            }
          });
        });
      });
  };

  getProfileData = (uid, callback) => {
    fetch('http://138.197.159.56:3232/user/getUser/' + uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error when getting user data for ' + uid);
        }
      })
      .then((data) => {
        if (data) {
          callback(data);
        } else {
          callback({
            profile_picture: '',
            username: uid,
          });
        }
      });
  };

  render() {
    const navigation = this.state.navigation;
    let posts = <Text>No posts found</Text>;
    if (this.state.postList && this.state.postList.length > 0) {
      posts = this.state.postList.map(function(data, index) {
        return (
          <SmallPost
            key={index}
            title={data.post.title}
            userImage={data.user.profile_picture}
            content={data.post.description}
            date={data.post.date}
            onPress={() =>
              navigation.navigate('Post', { post: data.post, user: data.user })}
            onImagePress={() =>
              navigation.navigate('otherProfile', { otherID: data.post.uid })}
          />
        );
      });
    }

    if (!this.state.loading) {
      return (
        <Container backgroundColor="#9E768F">
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView behavior="padding">
            <ScrollView showsVerticalScrollIndicator={false}>
              <List
                containerStyle={{
                  marginTop: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  backgroundColor: 'transparent',
                  marginVertical: 5,
                }}
              >
                {posts}
              </List>
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

export default SearchLandingPage;
