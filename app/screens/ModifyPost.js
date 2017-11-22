import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Platform,
  Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { Container } from '../components/Container';
import { EditablePost } from '../components/Post';
import { Header } from 'react-native-elements';
import { DeletePostWarning } from '../components/DeleteWarning';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const keyboardVerticalOffset = Platform.OS === 'ios' ? 0 : 20;
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
      navigation: this.props.navigation,
      showDelete: true,
    };
  }

  componentWillMount() {
    console.log(this.props.navigation.state.params, 'params');

    if (this.props.navigation.state.params.edit) {
      console.log('am editing...');
      this.setState({ edit: this.props.navigation.state.params.edit });
      this.setState({ post: this.props.navigation.state.params.post });
      this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
      this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    } else {
      this.setState({
        post: {
          uid: this.props.navigation.state.params.uid,
        },
      });
    }
  }

  componentWillUnmount () {
    if (this.props.navigation.state.params.edit) {
      this.keyboardDidShowListener.remove();
      this.keyboardDidHideListener.remove();
    }
  }

  _keyboardDidShow = () => {
    this.setState({showDelete: false});
  };

  _keyboardDidHide = () => {
    this.setState({showDelete: true});
  };


  render() {
    const backAction = NavigationActions.back({
      key: 'SearchLandingPage',
    });
    let search = this.props.navigation.state.params.search;
    let deletePost = this.state.edit ? (
      <DeletePostWarning
        pid={this.state.post.pid}
        navigation={this.props.navigation}
        backAction={backAction}
      />
    ) : null;
    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <Header
          outerContainerStyles={styles.customHeaderOuterContainerStyle}
          innerContainerStyles={styles.customHeaderInnerContainerStyle}
          backgroundColor={EStyleSheet.value('$baseCoral')}
          centerComponent={
            <Text
              allowFontScaling={false}
              style={styles.customHeaderCenterComponentTextWhite}
            >
              Post
            </Text>
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.customScrollView}
          keyboardVerticalOffset={keyboardVerticalOffset}
          behavior="padding">
            <EditablePost
              post={this.state.post}
              edit={this.state.edit}
              navigation={this.props.navigation}
              searchedTags={search}
            />
            <View style={this.state.showDelete ? styles.deletePostView : styles.hiddenPostView}>{deletePost}</View>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default ModifyPost;
