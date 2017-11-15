import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container } from '../components/Container';
import { FullPost } from '../components/Post';
import { Header } from 'react-native-elements';
import styles from './styles';

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
    if (
      !this.props.navigation.state.params.user ||
      !this.props.navigation.state.params.post
    ) {
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
    } else {
      console.log('already have user and post data');
      this.setState({
        user: this.props.navigation.state.params.user,
        post: this.props.navigation.state.params.post,
        loading: false,
      });
    }
  };

  componentDidMount() {
    this.getFullPostData();
  }

  render() {
    if (!this.state.loading) {
      return (
        <Container color={false}>
          <StatusBar barStyle="light-content" />
          <Header
            outerContainerStyles={styles.customHeaderOuterContainerStyle}
            innerContainerStyles={styles.customHeaderInnerContainerStyle}
            backgroundColor="white"
            centerComponent={
              <Text
                allowFontScaling={false}
                style={styles.customHeaderCenterComponentTextBlack}
              >
                Post
              </Text>
            }
            leftComponent={
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Icon name="chevron-left" color="black" size={20} />
              </TouchableOpacity>
            }
          />
          <KeyboardAvoidingView
            style={styles.customScrollView}
            behavior="padding"
          >
            <ScrollView
              style={styles.searchLandingView}
              showsVerticalScrollIndicator={false}
            >
              <FullPost
                post={this.state.post}
                user={this.state.user}
                navigation={this.props.navigation}
                edit={this.state.edit}
                onImagePress={() =>
                  this.props.navigation.navigate('otherProfile', {
                    otherID: this.state.post.uid,
                  })}
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

export default Post;
