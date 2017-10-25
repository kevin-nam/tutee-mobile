import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Rating } from 'react-native-elements';

import styles from './styles';

const RatingProp = ({ onSubmit, onText }) => {
  return (
    <View style={styles.container}>
      <Rating imageSize={30} showRating={true} type="custom" />
    </View>
  );
};

RatingProp.propTypes = {
  onSubmit: PropTypes.func,
  onText: PropTypes.func,
};

export default RatingProp;
