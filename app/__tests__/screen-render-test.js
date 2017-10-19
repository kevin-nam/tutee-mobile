import React from 'react';
import Home from '../screens/Home';
import Connections from '../screens/Home';
import Login from '../screens/Login';
import Messaging from '../screens/Messaging';
import Post from '../screens/Post';
import Profile from '../screens/Profile';
import Session from '../screens/Session';
import smallPost from '../screens/smallPost';
import renderer from 'react-test-renderer';

it('renders Home without crashing', () => {
  const rendered = renderer.create(<Home />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Connections without crashing', () => {
  const rendered = renderer.create(<Connections />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Session without crashing', () => {
  const rendered = renderer.create(<Session />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Login without crashing', () => {
  const rendered = renderer.create(<Login />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Messaging without crashing', () => {
  const rendered = renderer.create(<Messaging />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders Post without crashing', () => {
  const rendered = renderer.create(<Post />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders smallPost without crashing', () => {
  const rendered = renderer.create(<smallPost />).toJSON();
  expect(rendered).toBeTruthy();
});
