import { NavigationActions } from 'react-navigation';

export const showSessionRequest = (content) => {
  const nav = NavigationActions.navigate({
      routeName: 'RequestSession',
      params: {
        content: content,
      }
    });
  return nav;
};

export const showInSession = (content, username) => {
  const nav = NavigationActions.navigate({
    routeName: 'InSession',
    params: {
      content: content,
      username: username,
    }
  });
  return nav;
};

export const navigateToPendingRequest = () => {
  const nav = NavigationActions.navigate({
    routeName: 'Home',
    action: NavigationActions.navigate({
      routeName: 'PendingRequests',
    }),
  });
  return nav;
};

export const navigateToConnection = () => {
  const nav = NavigationActions.navigate({
    routeName: 'Home',
    action: NavigationActions.navigate({
      routeName: 'Connections',
    }),
  });
  return nav;
};
