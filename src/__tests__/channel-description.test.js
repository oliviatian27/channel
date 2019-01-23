import React from 'react';
import { shallow } from 'enzyme';

import ChannelDescription from '../components/channel-list/channel-detail/channel-description';


describe('ChannelDescription tests', () => {

  it('renders ChannelDescription component', () => {
    const description = "one";
    const wrapper = shallow(<ChannelDescription description={description} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-description')).toBeDefined();
    expect(wrapper.find('.channel-description')).toMatchSnapshot();
  });

  it('displays the correct description based on props.description', () => {
    const description = "one";
    const wrapper = shallow(<ChannelDescription description={description} />);

    // Expect the description text to be props.description
    expect(wrapper.find('.channel-description').text()).toBe(description);

    // update the description props
    wrapper.setProps({description:"two"})

    expect(wrapper.find('.channel-description').text()).toBe("two");
  });
})
