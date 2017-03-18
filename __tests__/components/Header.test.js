import React from 'react';
import renderer from 'react-test-renderer'
import Header from '../../components/Header.js';

describe('With Snapshot Testing', () => {
  it('Header Snapshot Testing', () => {
    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});