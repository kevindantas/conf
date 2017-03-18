import React from 'react';
import renderer from 'react-test-renderer'
import Logo from '../../components/Logo.js';

describe('With Snapshot Testing', () => {
  it('Logo Snapshot Testing', () => {
    const component = renderer.create(<Logo />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});