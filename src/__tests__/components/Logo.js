import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Logo from '../../components/Logo';
import { MorphReplace } from 'react-svg-morph';

describe('<Logo />', () => {

  it('render self', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.is('MorphReplace')).toBe(true)
  });

});
