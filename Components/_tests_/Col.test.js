import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Col from '../Col';

test('renders correctly', () => {
  const tree = renderer.create(<Col />).toJSON();
  expect(tree).toMatchSnapshot();
});
