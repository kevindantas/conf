import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import Button from '../../components/Button';


describe('<Button />', () => {


  it('should render a label', () => {
    const wrapper = shallow(
      <Button label="MyLabel" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should set `href` prop', () => {
    const link = 'some-link';
    const wrapper = shallow(
      <Button label="MyLabel" href={link} />
    );

    expect(wrapper.find('a').props().href).toEqual(link);
  });


});
