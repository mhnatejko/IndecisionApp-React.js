// react-test-rendere //pozwoli na renderowania komponentow w regular JS code

import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';
import { shallow} from 'enzyme';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').length).toBe(1) //#id .class etc tez moz eyc
    //expect(wrapper.find('h1').text()).toBe("Expensify ")
    
    
    
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    
})