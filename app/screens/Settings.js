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
import { NavigationActions } from 'react-navigation';
import { BasicButton } from '../components/SettingsComponents';

class Settings extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  logout = () => {
    const rootNavigation = this.props.screenProps.rootNav;

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })],
    });

    rootNavigation.dispatch(resetAction);
  };

  render() {
    return (
      <Container color={false}>
        <StatusBar barStyle={'light-content'} />
        <Header
          outerContainerStyles={styles.settingsHeaderOuterContainerStyle}
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
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} hitSlop={{ bottom: 10, left: 50, right: 50 }}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.settingsScrollView}
          behavior="padding"
        >
          <ScrollView style={styles.searchLandingView}>
            <BasicButton
              text="Session Receipts"
              onPress={() => this.props.navigation.navigate('SessionReceipts')}
              iconName="chevron-right"
            />
            <BasicButton
              text="Edit Account Info"
              onPress={() => {
                this.props.navigation.navigate('EditAccount', {
                  user: this.props.navigation.state.params.user,
                });
              }}
              iconName="chevron-right"
            />
            <BasicButton
              text="Logout"
              onPress={() => {
                AsyncStorage.clear();
                this.logout();
              }}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default Settings;
