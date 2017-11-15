import React from 'react';
import { MessageBubble } from '../components/MessageBubble';
import { MessagingBar } from '../components/MessagingBar';
import { MessagingBody } from '../components/MessagingBody';
import { MessagingHeader } from '../components/MessagingHeader';
import renderer from 'react-test-renderer';

it('renders MessageBubble without crashing', () => {
  const rendered = renderer.create(<MessageBubble sentBy='test' isReceived={false} messageData='test'/>).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders MessagingBar without crashing', () => {
  const rendered = renderer.create(<MessagingBar />).toJSON();
  expect(rendered).toBeTruthy();
});

// it('renders MessagingBody without crashing', () => {
//   const rendered = renderer.create(<MessagingBody />).toJSON();
//   expect(rendered).toBeTruthy();
// });

it('renders MessagingHeader without crashing', () => {
  const rendered = renderer.create(<MessagingHeader />).toJSON();
  expect(rendered).toBeTruthy();
});

