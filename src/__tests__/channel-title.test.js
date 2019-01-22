import React from 'react';
import { shallow } from 'enzyme';

import ChannelTitle from '../components/channel-list/channel-detail/channel-title';


describe('ChannelTitle tests', () => {

  it('renders ChannelTitle component', () => {
    const title = "one";
    const wrapper = shallow(<ChannelTitle title={title} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-title')).toBeDefined();
  });

  it('displays the correct title based on props.title', () => {
    const title = "one";
    const wrapper = shallow(<ChannelTitle title={title} />);

    // Expect the title text to be props.title
    expect(wrapper.find('.channel-title').text()).toBe(title);

    // update the title props
    wrapper.setProps({title:"two"})

    expect(wrapper.find('.channel-title').text()).toBe("two");
  });
})
