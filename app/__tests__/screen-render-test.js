import React from 'react';
import Connections from '../screens/Connections';
import Login from '../screens/Login';
import Messaging from '../screens/Messaging';
import Post from '../screens/Post';
import Session from '../screens/RequestSession';
import renderer from 'react-test-renderer';

const navigation = {
  state: {
    params: {
      content: 'content',
    },
  },
};

it('renders Connections without crashing', () => {
  const rendered = renderer.create(<Connections />).toJSON();
  expect(rendered).toBeNull();
});

it('renders Session without crashing', () => {
  const rendered = renderer
    .create(<Session navigation={navigation} />)
    .toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Login without crashing', () => {
  const rendered = renderer.create(<Login />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Messaging without crashing', () => {
  const rendered = renderer
    .create(<Messaging navigation={navigation} />)
    .toJSON();
  expect(rendered).toBeNull();
});

it('renders Post without crashing', () => {
  const rendered = renderer.create(<Post />).toJSON();
  expect(rendered).toBeNull();
});
