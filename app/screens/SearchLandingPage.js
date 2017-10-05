import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native';
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
      searchedList: [],
    };
  }

  componentWillMount() {
    this.getPostListData();
  }

  getPostListData = async () => {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    await fetch('http://138.197.159.56:3232/post/get/list', {
      method: 'POST',
      body: JSON.stringify({
        pidList: ['-KfI8LzfiSnFjRWCgJt7', '-KfI8NEFcuvq1AnPfCUU'],
      }),
      // JSON.stringify(this.props.navigation.state.postList),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          console.log('success');
          return response.json();
        } else {
          console.log('Error when creating user');
        }
      })
      .then((data) => {
        // console.log(data);
        this.setState({ searchedList: data });
        console.log(data);
      });
  };

  render() {
    let postList = this.state.searchedList.map(function(post, index) {
      return (
        <SmallPost
          key={index}
          title={post.title}
          userImage={null}
          content={post.description}
          date={post.date}
          onPress={() => this.props.navigation.navigate('Post', { post: post })}
        />
      );
    });

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
              {postList}
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
