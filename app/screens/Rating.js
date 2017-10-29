import React from 'react';
import { Container } from '../components/Container';
import { RatingProp } from '../components/Rating';

class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 0,
    };
  }

  handleChangeRating = (newRating) => {
    // console.log(newRating);
    this.setState({ rating: newRating });
  };

  handleSubmitRating = () => {
    console.log('Pressed submit');
  };

  render() {
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
