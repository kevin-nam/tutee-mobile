import React from 'react';
import { FacebookLoginButton } from '../components/FacebookLoginButton';
import renderer from 'react-test-renderer';

it('renders FacebookLoginButton without crashing', () => {
  const rendered = renderer.create(<FacebookLoginButton />).toJSON();
  expect(rendered).toBeTruthy();
});
