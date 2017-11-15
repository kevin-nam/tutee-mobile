import React from 'react';
import { ProfileBody } from '../components/ProfileBody';
import { ProfileHeader } from '../components/ProfileHeader';
import renderer from 'react-test-renderer';

it('renders ProfileBody without crashing', () => {
  const user = {
    username: 'test',
    rating: 5,
    bio: 'hello bio'
  };

  const rendered = renderer.create(<ProfileBody user={user}/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders ProfileHeader without crashing', () => {
  const user = {
    username: 'test',
    rating: 5
  };
  const rendered = renderer.create(<ProfileHeader user={user}/>).toJSON();
  expect(rendered).toBeTruthy();
});
