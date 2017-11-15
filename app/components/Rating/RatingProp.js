import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

import styles from './styles';

const RatingProp = ({ onChangeRating, onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.ratingBox}>
        <Rating
          imageSize={40}
          showRating={true}
          type="custom"
          onFinishRating={onChangeRating}
        />
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.submitButton}>{'\n'}Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

RatingProp.propTypes = {
  onChangeRating: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default RatingProp;
