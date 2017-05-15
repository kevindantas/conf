import React from 'react';
import { shallow } from 'enzyme';
import AnimatedBanner from '../AnimatedBanner';

describe('<AnimatedBanner />', () => {
	const wrapper = shallow(<AnimatedBanner />);

	it('render canvas', () => {
		expect(wrapper.is('canvas')).toBe(true);
	})
})