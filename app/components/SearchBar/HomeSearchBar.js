import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

const HomeSearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchBar lightTheme round placeholder="Search..." />
    </View>
  );
};

export default HomeSearchBar;
