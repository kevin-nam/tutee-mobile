import React from 'react';
import { Container } from '../components/Container';
import { RatingProp } from '../components/Rating';

class Rating extends React.Component {
  render() {
    return (
      <Container backgroundColor={'#9E768F'}>
        <RatingProp />
      </Container>
    );
  }
}

export default Rating;
