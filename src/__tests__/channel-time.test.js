import React from 'react';
import { shallow,mount } from 'enzyme';
import moment from 'moment'

import ChannelTime from '../components/channel-list/channel-time';


describe('ChannelTime tests', () => {

  it('renders Channel-time', () => {
    const time = "2019-01-05 19:00:00";
    const wrapper = shallow(<ChannelTime time={time} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-time')).toBeDefined();
  });

  it('displays correct start and end time based on props.time', () => {
    const time = "2019-01-20 10:00:00";
    const wrapper = mount(<ChannelTime time={time} />);
    console.log(wrapper.debug())
    // Expect the time text to be props.time
    expect(wrapper.find('time').at(0).text()).toBe(time);
    expect(wrapper.find('.end').text()).toBe(time);
    // update the time props
    const newTime = "2019-01-21 18:00:00";
    wrapper.setProps({time:newTime})

    expect(wrapper.find('.start').text()).toBe(newTime);
  });
})
