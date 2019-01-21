import React from 'react';
import { shallow } from 'enzyme';

import ChannelDate from '../components/channel-list/channel-date';


describe('ChannelDate tests', () => {

  it('renders Channel-date', () => {
    const date = "2019-01-05";
    const wrapper = shallow(<ChannelDate date={date} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-date')).toBeDefined();
  });

  it('displays date based on props.date', () => {
    const date = "2019-01-01";
    const wrapper = shallow(<ChannelDate date={date} />);

    // Expect the date text to be props.date
    expect(wrapper.find('.date').text()).toBe("2019-01-01");

    // update the date props
    wrapper.setProps({date:"2019-01-15"})

    expect(wrapper.find('.date').text()).toBe("2019-01-15");
  });
})
