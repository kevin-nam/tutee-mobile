import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { SmallPost } from '../Post';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class ProfileBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'bio',
      content: this.showBio(this.props.user.bio),
      postLists: [],
      bio: this.props.user.bio,
    };
  }

  componentWillMount() {
    this.getUserPostData();
  }

  componentWillReceiveProps(nextProps) {
    const content = this.showBio(nextProps.user.bio);

    this.setState({
      type: 'bio',
      content: content,
      bio: this.props.user.bio,
    });

    this.getUserPostData();
  }

  getUserPostData = async () => {
    fetch('http://138.197.159.56:3232/post/get/list/user/' + this.props.uid, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          if (response._bodyInit) {
            return response.json();
          } else {
            this.setState({ postLists: [] });
            return [];
          }
        } else {
          console.log('Error when getting user post data', this.props.uid);
        }
      })
      .then((data) => {
        this.setState({ postLists: data });
      });
  };

  handlePress = (type) => {
    if (type === 'bio') {
      const bio = this.state.bio;
      this.setState({ type: type, content: this.showBio(bio) });
    } else if (type === 'post') {
      this.setState({ type: type, content: this.showPosts() });
    }
  };

  showBio = (bio) => {
    if (bio) {
      return (
        <View style={styles.bioView}>
          <Text allowFontScaling={false} style={styles.bioText}>
            {bio}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.bioView}>
        <Text allowFontScaling={false} style={styles.noBioText}>
          No bio yet! Write about yourself now.
        </Text>
      </View>
    );
  };

  showPosts = () => {
    if (this.state.postLists.length > 0) {
      const user = this.props.user;
      const navigation = this.props.navigation;
      const posts = this.state.postLists.map(function(data, index) {
        return (
          <SmallPost
            key={index}
            title={data.title}
            userImage={user.profile_picture}
            content={data.description}
            date={data.date}
            onPress={() =>
              navigation.navigate('Post', { post: data, user: user })}
          />
        );
      });
      return <View style={styles.postsView}>{posts}</View>;
    } else {
      return <View style={styles.bioView}><Text allowFontScaling={false} style={styles.noBioText}>No posts yet! Get to posting Champion!</Text>
        <Image
          style={styles.noPostsImage}
          key="1"
          source={require('../../../assets/images/corgimomo.png')}
        />
      </View>;
    }
  };

  render() {
    return (
      <View style={styles.flexHorizontal}>
        <View style={styles.tabsView}>
          <TouchableOpacity
            onPress={() => {
              this.handlePress('bio');
            }}
            style={styles.tab}
          >
            <Icon
              name="id-card"
              style={
                this.state.type === 'bio' ? styles.iconSelected : styles.icon
              }
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.handlePress('post');
            }}
            style={styles.tab}
          >
            <Icon
              name="list-ul"
              style={
                this.state.type === 'post' ? styles.iconSelected : styles.icon
              }
            />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.contentView}>{this.state.content}</ScrollView>
      </View>
    );
  }
}

export default ProfileBody;
