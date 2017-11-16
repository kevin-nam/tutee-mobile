import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavigationActions from 'react-navigation';

class Settings extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  logout = () => {
    const actionToDispatch = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
      key: null,
    });
    this.props.navigation.dispatch(actionToDispatch);
  };

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
              style={styles.customHeaderCenterComponentText}
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
          >
            <TouchableOpacity
              style={styles.settingsBtnContainer}
              onPress={async () => {
                // await AsyncStorage.clear();
                this.logout();
              }}
            >
              <Text allowFontScaling={false} style={styles.settingsBtn}>
                Logout
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Settings;
