import React from 'react';
import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { RatingProp } from '../components/Rating';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRating: 0,
      tutorName: '',
    };
  }

  componentWillMount() {
    this.setState({ tutorName: this.props.navigation.state.params.username });
  }

  handleChangeRating = (Rating) => {
    this.setState({ newRating: Rating });
  };

  handleSubmitRating = async () => {
    const newSum =
      this.props.navigation.state.params.currentSum + this.state.newRating;
    const newAverage =
      newSum / (this.props.navigation.state.params.numOfRatings + 1);

    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    await fetch('http://138.197.159.56:3232/user/updateRating', {
      method: 'POST',
      body: JSON.stringify({
        uid: this.props.navigation.state.params.uid,
        rating: newAverage,
        sum: newSum,
        numOfRatings: this.props.navigation.state.params.numOfRatings + 1,
      }),
      // JSON.stringify(this.props.navigation.state.postList),
      headers: headers,
    })
      .then((response) => {
        if (response.ok) {
          console.log('success');
          return response.json();
        } else {
          console.log('Error updating the rating.');
        }
      })
      .then((data) => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home' })],
        });
        this.props.navigation.dispatch(resetAction);
      });
  };

  render() {
    return (
      <Container color={true}>
        <View style={styles.ratingBoxView}>
          <View stlye={styles.ratingContentView}>
            <Text allowFontScaling={false} style={styles.ratingText}>
              Congratulations on completing your tutoring session with
              {' ' + this.state.tutorName}!{'\n\n'}
              Please give your tutor a rating based on their performance !
            </Text>
            <View style={styles.ratingPropView}>
              <RatingProp
                onChangeRating={this.handleChangeRating}
                onSubmit={this.handleSubmitRating}
              />
            </View>
          </View>
        </View>
      </Container>
    );
  }
}

export default Rating;
