import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Connections from '../screens/Connections';
import Login from '../screens/Login';
import Messaging from '../screens/Messaging';
import Session from '../screens/Session';
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import SearchLandingPage from '../screens/SearchLandingPage';

const ICON_PLATFORM = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 25;
const ICON_COLOR = 'white';
const TAB_BACKGROUND_COLOR = 'black';

const ConnectionStack = StackNavigator(
  {
    Connections: {
      screen: Connections,
      navigationOptions: {
        headerTitle: 'Connections',
        title: 'Connections',
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
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'screen',
  }
);

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        header: () => null,
      },
    },
    // Messaging: {
    //   screen: Messaging,
    //   navigationOptions: {
    //     headerTitle: 'Messaging',
    //   },
    // },
    Post: {
      screen: Post,
      navigationOptions: {
        headerTitle: 'Post',
      },
    },
    SearchLandingPage: {
      screen: SearchLandingPage,
      navigationOptions: {
        headerTitle: 'SearchLandingPage',
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'screen',
  }
);

const Navigator = TabNavigator(
  {
    Home: {
      screen: HomeStack,
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
      showLabel: false,
      upperCaseLabel: false,
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
          title: 'Tutee Login',
          header: () => null,
        },
      },
      Home: {
        screen: Navigator,
        navigationOption: {
          header: () => null,
        },
      },
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: isSignedIn ? 'Home' : 'Login',
    }
  );
};
