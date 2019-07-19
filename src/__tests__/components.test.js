import React from 'react';
import renderer from 'react-test-renderer';
import { App } from '../App';

describe('components', () => {
  describe('<App />', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});