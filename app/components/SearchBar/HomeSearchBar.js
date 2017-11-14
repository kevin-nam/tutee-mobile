import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { SearchBar } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';

import styles from './styles';

class HomeSearchBar extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    onText: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          round
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          placeholderTextColor={EStyleSheet.value('$grayLighten25')}
          placeholder="Search..."
          returnKeyType="search"
          onSubmitEditing={this.props.onSubmit}
          onChangeText={(text) => this.props.onText(text)}
        />
      </View>
    );
  }
}

export default HomeSearchBar;
