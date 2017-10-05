import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class ProfileBody extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      type :'bio',
      content : this.showBio(),
      postLists : []
    };
  }

  componentWillMount() {
    this.getUserPostData();
  }

  getUserPostData = async () => {
    console.log('getting User Post data for ' + this.props.uid);
    fetch('http://138.197.159.56:3232/post/get/list/user/' + this.props.uid, {
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log('Error when getting user post data', this.props.uid);
      }
    }).then((data) => {
      console.log('User Post Data', data);
      this.setState({postLists : data});
    });
  };

  handlePress = (type) => {
    console.log('pressed ' + type);
    this.setState({type: type});
    if (type == 'bio') {
      this.setState({content : this.showBio()});
    } else if (type == 'post') {
      this.setState({content : this.showPosts()});
    } else {
      this.setState({content : this.showSessions()});
    }
  };

  showBio = () => {
    const bio = this.props.user.bio;
    if (bio) {
      return <View style={styles.bioView}><Text style={styles.bioText}>{this.props.user.bio}</Text></View>
    }
    return <View style={styles.bioView}><Text style={styles.bioText}>No bio yet! Write about yourself now.</Text></View>
  };

  showPosts = () => {
    console.log(this.state.postLists);
    const posts = this.state.postLists.map((post) => {
      return ([
        <Text style={styles.postText}>{post.title}</Text>,
        <Text style={styles.postText}>{post.description}</Text>,
        <Text style={styles.postText}>{post.date}</Text>,
        <Text style={styles.postText}>{post.tagString}</Text>
      ]);
    });
    return <View style={styles.postsView}>{posts}</View>
  };

  showSessions = () => {
    return <View style={styles.sessionsView}><Text>SESSIONS</Text></View>
  };


  render() {
    return (
      <View style={styles.flexHorizontal}>
        <View style={styles.tabsView}>
          <TouchableOpacity onPress={() => {this.handlePress('bio')}} style={styles.tab}><Icon name="id-card" style={this.state.type == 'bio' ? styles.iconSelected : styles.icon}/></TouchableOpacity>
          <TouchableOpacity onPress={() => {this.handlePress('post')}} style={styles.tab}><Icon name="list-ul" style={this.state.type == 'post' ? styles.iconSelected : styles.icon}/></TouchableOpacity>
          <TouchableOpacity onPress={() => {this.handlePress('session')}} style={styles.tab}><Icon name="history" style={this.state.type == 'session' ? styles.iconSelected : styles.icon}/></TouchableOpacity>
        </View>
        <View style={styles.contentView}>
          {this.state.content}
        </View>
      </View>
    );
  }
}

export default ProfileBody;
