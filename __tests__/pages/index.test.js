import React from 'react';
import renderer from 'react-test-renderer'
import Index from '../../pages/index.js';

describe('With Snapshot Testing', () => {
  it('Page Index shows', () => {
    const component = renderer.create(<Index />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});