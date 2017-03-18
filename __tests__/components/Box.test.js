import React from 'react';
import renderer from 'react-test-renderer'
import Box from '../../components/Box.js';

describe('With Snapshot Testing', () => {
  it('Box Snapshot Testing', () => {
    const component = renderer.create(<Box />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});