import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Item from '../../components/Item';


describe('<Item />', () => {

  it('render self', () => {
    const wrapper = shallow(<Item />);
    expect(wrapper.is('div')).toBe(true)
  });

});
