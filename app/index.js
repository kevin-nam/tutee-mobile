import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import { Provider } from 'react-redux';

import Navigator from './config/routes';
// import { AlertProvider } from './components/Alert';
// import store from './config/store';

EStyleSheet.build({
  // outline: 1,
});

export default () => <Navigator onNavigationStateChange={null} />;
