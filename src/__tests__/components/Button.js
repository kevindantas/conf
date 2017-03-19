import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Button from '../../components/Button';


describe('<Button />', () => {

  it('render self', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.is('div')).toBe(true)
  });

});
