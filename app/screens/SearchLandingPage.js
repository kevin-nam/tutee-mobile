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
    };
  }

  componentWillMount() {
    this.getPostListData();
  }

  getPostListData = async () => {
    console.log(
      'Getting this on the search landing page: ' +
        this.props.navigation.state.params.tagList
    );
    // this.setState({ tagString: this.props.navigation.state.params.tagList });
    // console.log('the tagstring: ' + this.state.tagString);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    await fetch('http://138.197.159.56:3232/search/tags', {
      method: 'POST',
      body: JSON.stringify({
        tagString: this.props.navigation.state.params.tagList,
      }),
      // JSON.stringify(this.props.navigation.state.postList),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          console.log('success');
          return response.json();
        } else {
          console.log('Error searching for posts.');
        }
      })
      .then((data) => {
        // console.log(data);
        this.setState({ postList: data });
        console.log(data);
      });
  };

  render() {
    const navigation = this.state.navigation;
    let posts = <Text>No posts found</Text>;
    if (this.state.postList && this.state.postList.length > 0) {
      posts = this.state.postList.map(function(post, index) {
        return (
          <SmallPost
            key={index}
            title={post.title}
            userImage={null}
            content={post.description}
            date={post.date}
            onPress={() => navigation.navigate('Post', { post: post })}
          />
        );
      });
    }

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
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default SearchLandingPage;
