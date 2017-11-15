import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { Container } from '../components/Container';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class Settings extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container color={false}>
        <StatusBar barStyle="light-content" />
        <Header
          outerContainerStyles={styles.customHeaderOuterContainerStyle}
          innerContainerStyles={styles.customHeaderInnerContainerStyle}
          backgroundColor={EStyleSheet.value('$baseCoral')}
          centerComponent={
            <Text
              allowFontScaling={false}
              style={styles.customHeaderCenterComponentTextBlack}
            >
              Settings
            </Text>
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.customScrollView}
          behavior="padding"
        >
          <ScrollView
            style={styles.searchLandingView}
            showsVerticalScrollIndicator={false}
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Settings;
