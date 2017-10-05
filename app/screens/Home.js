import PropTypes from 'prop-types';
import React from 'react';
import { StatusBar, KeyboardAvoidingView, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { AsyncStorage } from 'react-native';

import { connectAlert } from '../components/Alert';
import { Container } from '../components/Container';
import { HomeSearchBar } from '../components/SearchBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.setWelcomeMessage = this.setWelcomeMessage.bind(this);
    this.state = {
      welcomeMessage: 'Welcome!',
      tempuid: '',
    };
  }

  // Runs before render
  componentWillMount() {
    this.setWelcomeMessage();
    this.tempFunc();
  }

  static propTypes = {
    navigation: PropTypes.object,
  };

  setWelcomeMessage = async () => {
    try {
      AsyncStorage.getItem('@MySuperStore:USER_NAME_KEY').then((name) => {
        if (name !== null) {
          this.setState({ welcomeMessage: 'Welcome ' + name + '!' });
        } else {
          // this.setState({welcomeMessage: 'Error getting your name !'});
        }
      });
    } catch (error) {
      console.log('Something went wrong when getting user name.');
    }
  };

  handlePressSearch = () => {
    console.log('Submitted search');
  };

  tempFunc = () => {
    const uid = await AsyncStorage.getItem('@MySuperStore:USER_ID_KEY');
    await this.setState({ tempuid: uid });
  };

  render() {
    let welcomeMessage = function(t) {
      return (
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '600' }}>
          {t}
        </Text>
      );
    };

    return (
      <Container backgroundColor="#9E768F">
        <StatusBar barStyle="light-content" />
        <HomeSearchBar
          onSubmit={() => this.props.navigation.navigate('SearchLandingPage')}
          // onSubmitEditing={this.handlePressSearch} // this.props.naviation.navigate('smallPost')
        />
        <KeyboardAvoidingView behavior="padding">
          <Text style={{ color: 'white', fontSize: 50, fontWeight: '600' }}>
            {welcomeMessage(this.state.welcomeMessage)}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() =>
              this.props.navigation.navigate('Post', {
                post: {
                  uid: this.state.tempuid,
                  title: 'Demo Full Post Title',
                  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum praeponunt, ut sit aliqua rerum selectio, naturam videntur sequi; Praeteritis, inquit, gaudeo. Ait enim se, si uratur, Quam hoc suave! dicturum. Quis istud possit, inquit, negare? Vitiosum est enim in dividendo partem in genere numerare.

Si verbum sequimur, primum longius verbum praepositum quam bonum. Duo Reges: constructio interrete. Aliter enim nosmet ipsos nosse non possumus. Ego vero isti, inquam, permitto. Quae si potest singula consolando levare, universa quo modo sustinebit? Non est igitur summum malum dolor.

Nam de summo mox, ut dixi, videbimus et ad id explicandum disputationem omnem conferemus. Nos commodius agimus. Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae. Sed quanta sit alias, nunc tantum possitne esse tanta. Qua tu etiam inprudens utebare non numquam. Nam memini etiam quae nolo, oblivisci non possum quae volo.

Non enim quaero quid verum, sed quid cuique dicendum sit. Quis, quaeso, illum negat et bonum virum et comem et humanum fuisse? Quid censes in Latino fore? Ego quoque, inquit, didicerim libentius si quid attuleris, quam te reprehenderim. Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; Non igitur bene. Polycratem Samium felicem appellabant. Mihi enim erit isdem istis fortasse iam utendum.`,
                  tagString:
                    '#tutee #demo #mtl #5stars #best #cool #math #mcgill #MATH263',
                  type: 'tutor',
                  date: 'a date',
                },
              })}
          >
            Post
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 50,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() => this.props.navigation.navigate('SearchLandingPage')}
          >
            SmallPost
          </Text>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps)(connectAlert(Home));

export default Home;
