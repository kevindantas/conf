import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Body from '../../components/Body';
import Logo from '../../components/Logo';
import ActionButton from '../../components/ActionButton';

describe('<Body />', () => {

  const wrapper = shallow(<Body />);

  it('render Logo', () => {
    expect(wrapper.find(Logo)).to.have.length(1); // passes
  });

  it('render ActionButton', () => {
    expect(wrapper.find(ActionButton)).to.have.length(1); // passes
  });

});
