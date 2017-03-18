import React from 'react';
import renderer from 'react-test-renderer'
import Home from '../../components/Home.js';

describe('With Snapshot Testing', () => {
  it('Home Snapshot Testing', () => {
    const component = renderer.create(<Home />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});