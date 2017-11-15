import { NavigationActions } from 'react-navigation';

export const showSessionRequest = (content) => {
  const nav = NavigationActions.navigate({
    routeName: 'Home',
    action: NavigationActions.navigate({
      routeName: 'RequestSession',
      params: {
        content: content,
      },
    }),
  });
  return nav;
};

export const showInSession = (content) => {
  const nav = NavigationActions.navigate({
    routeName: 'Home',
    action: NavigationActions.navigate({
      routeName: 'InSession',
      params: {
        content: content,
      },
    }),
  });
  return nav;
};
