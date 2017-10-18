import React from 'react';
import { SmallPost, FullPost } from '../components/Post';
import renderer from 'react-test-renderer';

it('renders SmallPost without crashing', () => {
  const rendered = renderer.create(<SmallPost />).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders FullPost without crashing', () => {
  const rendered = renderer.create(<FullPost />).toJSON();
  expect(rendered).toBeTruthy();
});