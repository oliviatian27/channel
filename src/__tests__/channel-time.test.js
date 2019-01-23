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
    expect(wrapper.find('.channel-time')).toMatchSnapshot();
  });

  it('displays correct start and end time based on props.time', () => {
    const time = "2018-01-20 03:00:00";
    const wrapper = mount(<ChannelTime time={time} />);

    // Expect the time text to be props.time
    expect(wrapper.find('time').at(0).text()).toBe(moment(time).format("LT [-]"));
    expect(wrapper.find('time').at(1).text()).toBe(moment(time).add(1,'hours').format(" LT [EDT]"));

    //update the time props
    const newTime = "2018-01-21 18:00:00";
    wrapper.setProps({time:newTime})

    expect(wrapper.find('time').at(0).text()).toBe(moment(newTime).format("LT [-]"));
    expect(wrapper.find('time').at(1).text()).toBe(moment(newTime).add(1,'hours').format(" LT [EDT]"));
    wrapper.unmount()
  });
})
