import React from 'react';
import renderer from 'react-test-renderer'
import Button from '../../components/Button.js';

describe('With Snapshot Testing', () => {
  it('Button Snapshot Testing', () => {
    const component = renderer.create(<Button />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});