import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import { Badge } from 'react-native-elements';
import { CreatePostButton } from '../components/Post';
import { Container } from '../components/Container';
import { HomeSearchBar } from '../components/SearchBar';
import store from '../store/store';
import styles from './styles';
import { connect } from 'react-redux';

class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.setWelcomeMessage = this.setWelcomeMessage.bind(this);
    this.state = {
      recentTags: [],
      welcomeMessage: 'Welcome!',
      tempuid: '',
      searchedTags: '',
    };
  }

  // Runs before render
  componentWillMount() {
    this.getRecentTags(9);
    this.setWelcomeMessage();
    this.tempFunc();
  }

  // Listens to current route and re-renders if necessary
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRoute === 'Home') {
      this.getRecentTags(9);
    }
  }

  getRecentTags = (num) => {
    fetch('http://138.197.159.56:3232/tags/recentTags/' + num, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.log('Error when getting recent tags ');
        }
      })
      .then((data) => {
        if (!data) {
          this.setState({ recentTags: [] });
        } else {
          this.setState({ recentTags: data });
        }
      });
  };

  setWelcomeMessage = async () => {
    try {
      const name = store.getState().user.username;
      const firstName = name.split(' ')[0];
      this.setState({ welcomeMessage: 'Hey, ' + firstName + '!' });
    } catch (error) {
      console.log('Something went wrong when getting user name.');
    }
  };

  handlePressSearch = () => {
    if (this.state.searchedTags.length != 0) {
      console.log('Submitted search');

      this.props.navigation.navigate('SearchLandingPage', {
        tagList: this.state.searchedTags,
      });
    } else {
      alert('Please enter search tags!');
    }
  };

  handleTextChange = (text) => {
    // console.log(text);
    this.setState({ searchedTags: text });
  };

  tempFunc = async () => {
    const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
    await this.setState({ tempuid: uid });
  };

  render() {
    const navigation = this.props.navigation;
    let welcomeText = (
      <Text allowFontScaling={false} style={styles.homeWelcomeText}>
        {this.state.welcomeMessage}
      </Text>
    );

    let tags =
      this.state.recentTags.length > 0 ? (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.homeBadgeScrollView}
        >
          {this.state.recentTags.map(function(tag, index) {
            return (
              <Badge
                key={index}
                containerStyle={styles.homeBadgeContainer}
                textStyle={styles.homeBadgeText}
                value={'#' + tag}
                onPress={() => {
                  navigation.navigate('SearchLandingPage', {
                    tagList: tag,
                  });
                }}
              />
            );
          })}
        </ScrollView>
      ) : (
        <Text allowFontScaling={false} style={styles.homeNoTagPhrase}>
          {'What?! No #Tags?? ΣΣ(ﾟДﾟ;)'}
        </Text>
      );

    return (
      <Container color={true}>
        <StatusBar barStyle="light-content" />
        <HomeSearchBar
          onSubmit={this.handlePressSearch}
          onText={this.handleTextChange}
        />
        <View style={styles.homeMainView}>
          {welcomeText}
          {<Image source={require('../../assets/images/corgipon.png')} />}
          <Text allowFontScaling={false} style={styles.homeCatchPhrase}>
            Let's get learning!
          </Text>
          <View style={styles.homeBadgeSectionView}>
            <Text allowFontScaling={false} style={styles.homeTagPhrase}>
              Some of the most recent #Tags
            </Text>
            <View style={styles.homeBadgeView}>{tags}</View>
          </View>
        </View>
        <View style={styles.homeCreatePostButtonView}>
          <CreatePostButton
            navigation={this.props.navigation}
            uid={this.state.tempuid}
          />
        </View>
      </Container>
    );
  }
}

// Get current route
const mapStateToProps = (state) => ({
  currentRoute: state.user.currentRoute,
});

export default connect(mapStateToProps)(Home);
