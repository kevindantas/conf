import React from 'react';
import renderer from 'react-test-renderer'
import Buttons from '../../components/Buttons.js';

describe('With Snapshot Testing', () => {
  it('Buttons Snapshot Testing', () => {
    const component = renderer.create(<Buttons />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});