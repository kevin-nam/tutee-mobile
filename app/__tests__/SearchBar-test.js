import React from 'react';
import { HomeSearchBar } from '../components/SearchBar';
import renderer from 'react-test-renderer';

it('renders HomeSearchBar without crashing', () => {
  const rendered = renderer.create(<HomeSearchBar />).toJSON();
  expect(rendered).toBeTruthy();
});