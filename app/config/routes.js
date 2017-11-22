import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Connections from '../screens/Connections';
import Login from '../screens/Login';
import Messaging from '../screens/Messaging';
import RequestSession from '../screens/RequestSession';
import Profile from '../screens/Profile';
import Post from '../screens/Post';
import ModifyPost from '../screens/ModifyPost';
import SearchLandingPage from '../screens/SearchLandingPage';
import PendingRequests from '../screens/PendingRequests';
import StartASession from '../screens/StartASession';
import Rating from '../screens/Rating';
import InSession from '../screens/InSession';
import Settings from '../screens/Settings';
import EditAccount from '../screens/EditAccount';
import SessionReceipts from '../screens/SessionReceipts';
import index from '../index';

const ICON_PLATFORM = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_SIZE = 25;
const ICON_COLOR = 'white';
// TODO: find a way to make this use var $baseBlue
const TAB_BACKGROUND_COLOR = '#69D2E7';

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
        header: () => null,
      },
    },
    PendingRequests: {
      screen: PendingRequests,
      navigationOptions: {
        headerTitle: 'Pending Requests',
        header: () => null,
      },
    },
    StartASession: {
      screen: StartASession,
      navigationOptions: {
        headerTitle: 'Create a new session',
        header: () => null,
      },
    },
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'screen',
  }
);
const ProfileStack = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTitle: 'Profile',
      header: () => null,
    },
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      headerTitle: 'Settings',
      header: () => null,
    },
  },
  EditAccount: {
    screen: EditAccount,
    navigationOptions: {
      headerTitle: 'Edit Account Info',
      header: () => null,
    },
  },
  SessionReceipts: {
    screen: SessionReceipts,
    navigationOptions: {
      headerTitle: 'Session Receipts',
      header: () => null,
    },
  },
});

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'Home',
        header: () => null,
      },
    },
    SearchLandingPage: {
      screen: SearchLandingPage,
      navigationOptions: {
        headerTitle: 'SearchLandingPage',
        header: () => null,
      },
    },
    Post: {
      screen: Post,
      navigationOptions: {
        headerTitle: 'Post',
        header: () => null,
      },
    },
    CreatePost: {
      screen: ModifyPost,
      navigationOptions: {
        headerTitle: 'Create Post',
        header: () => null,
      },
    },
    ModifyPost: {
      screen: ModifyPost,
      navigationOptions: {
        headerTitle: 'Edit Post',
        header: () => null,
      },
    },
    Rating: {
      screen: Rating,
      navigationOption: {
        headerTitle: 'Rating',
      },
    },
    otherProfile: {
      screen: Profile,
      navigationOptions: {
        headerTitle: 'Profile',
        header: () => null,
      },
    },
    RequestSession: {
      screen: RequestSession,
      navigationOptions: {
        headerTitle: 'Session Request',
        header: () => null,
      },
    },
    InSession: {
      screen: InSession,
      navigationOptions: {
        headerTitle: 'In Session',
        header: () => null,
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
      screen: ProfileStack,
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
            name={`${ICON_PLATFORM}-chatbubbles`}
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
        backgroundColor: 'transparent',
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
      Index: {
        screen: index,
        navigationOption: {
          title: 'Index',
          header: () => null,
        },
      },
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
