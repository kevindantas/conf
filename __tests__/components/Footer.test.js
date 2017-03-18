import React from 'react';
import renderer from 'react-test-renderer'
import Footer from '../../components/Footer.js';

describe('With Snapshot Testing', () => {
  it('Footer Snapshot Testing', () => {
    const component = renderer.create(<Footer />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});