import React from 'react';
import { Container } from '../components/Container';
import { RatingProp } from '../components/Rating';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newRating: 0,
    };
  }

  handleChangeRating = (Rating) => {
    // console.log(newRating);
    this.setState({ newRating: Rating });
  };

  handleSubmitRating = async () => {
    console.log('Pressed submit');

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
        console.log(data);
        this.props.navigation.goBack();
      });
  };

  render() {
    // console.log(this.props.navigation.state.params.uid);
    return (
      <Container backgroundColor={'rgba(1, 1, 1, 0.5)'}>
        <RatingProp
          onChangeRating={this.handleChangeRating}
          onSubmit={this.handleSubmitRating}
        />
      </Container>
    );
  }
}

export default Rating;
