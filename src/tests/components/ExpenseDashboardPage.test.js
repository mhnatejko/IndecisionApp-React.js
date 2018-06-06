import React from 'react';
import ExpenceDashboardPage from '../../components/ExpenceDashboardPage';
import {shallow} from 'enzyme';

test('should render ExpenceDashboardPage', () => {
    const wrapper = shallow(<ExpenceDashboardPage />);
    expect(wrapper).toMatchSnapshot()
})