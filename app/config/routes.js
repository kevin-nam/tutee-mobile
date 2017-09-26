import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Connections from '../screens/Connections';
import Login from '../screens/Login';
import Messaging from '../screens/Messaging';
import Session from '../screens/Session';
import Profile from '../screens/Profile';

const ICON_PLATFORM = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 30;
const ICON_COLOR = 'white';
const TAB_BACKGROUND_COLOR = 'black';

const ConnectionStack = StackNavigator(
  {
    Connections: {
      screen: Connections,
      navigationOptions: {
        header: () => null,
      },
    },
    Messaging: {
      screen: Messaging,
      navigationOptions: {
        headerTitle: 'Messaging',
      },
    },
    Session: {
      screen: Session,
      navigationOptions: {
        headerTitle: 'Session',
      },
    },
  },
  {
    mode: 'modal',
    headerMode: 'screen',
  }
);

const Navigator = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <Ionicons
            name={`${ICON_PLATFORM}-home`}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: () => (
          <Ionicons
            name={`${ICON_PLATFORM}-person`}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        ),
      },
    },

    Connections: {
      screen: ConnectionStack,
      navigationOptions: {
        tabBarIcon: () => (
          <Ionicons
            name={`${ICON_PLATFORM}-mail`}
            size={ICON_SIZE}
            color={ICON_COLOR}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: TAB_BACKGROUND_COLOR,
      },
      showIcon: true,
      indicatorStyle: {
        backgroundColor: ICON_COLOR,
      },
    },
    animationEnabled: true,
    initialRouteName: 'Home',
    swipeEnabled: true,
    order: ['Profile', 'Home', 'Connections'],
    tabBarPosition: 'bottom',
  }
);

export const createRootNavigator = (isSignedIn = false) => {
  return StackNavigator(
    {
      Login: {
        screen: Login,
        navigationOption: {
          title: "Tutee Login",
          header: () => null,
        }
      },
      Home: {
        screen: Navigator,
        navigationOption: {
          header: () => null,
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: isSignedIn ? "Home" : "Login"
    }
  );
};
