import React from 'react';
import { shallow } from 'enzyme';
import AnimatedBackground from '../AnimatedBackground';

describe('<AnimatedBackground />', () => {
	const wrapper = shallow(<AnimatedBackground />);

	it('render canvas', () => {
		expect(wrapper.is('canvas')).toBe(true);
	})
})