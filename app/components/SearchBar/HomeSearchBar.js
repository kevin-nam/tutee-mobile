import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

const HomeSearchBar = ({ onSubmit, onText }) => {
  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        round
        placeholder="Search..."
        returnKeyType="search"
        onSubmitEditing={onSubmit}
        onChangeText={(text) => onText(text)}
      />
    </View>
  );
};

HomeSearchBar.propTypes = {
  onSubmit: PropTypes.func,
  onText: PropTypes.func,
};

export default HomeSearchBar;
