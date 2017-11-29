import PropTypes from 'prop-types';
import React from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Container } from '../components/Container';
import { Header } from 'react-native-elements';
import { TitledTextInput } from '../components/SettingsComponents';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import EStyleSheet from 'react-native-extended-stylesheet';

class SessionReceipts extends React.Component {
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
          outerContainerStyles={styles.settingsHeaderOuterContainerStyle}
          innerContainerStyles={styles.customHeaderInnerContainerStyle}
          backgroundColor={EStyleSheet.value('$baseCoral')}
          centerComponent={
            <Text
              allowFontScaling={false}
              style={styles.customHeaderCenterComponentText}
            >
              Session Receipts
            </Text>
          }
          leftComponent={
            <TouchableOpacity onPress={() => this.props.navigation.goBack()} hitSlop={{ top: 0, bottom: 10, left: 50, right: 50 }}>
              <Icon name="chevron-left" color="white" size={20} />
            </TouchableOpacity>
          }
        />
        <KeyboardAvoidingView
          style={styles.settingsScrollView}
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

export default SessionReceipts;
