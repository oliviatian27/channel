import React from 'react';
import { shallow } from 'enzyme';

import ChannelList from '../components/channel-list';


describe('ChannelList tests', () => {

  it('renders Channel-items', () => {
    const list = {data:[{'title':'one'}, {'title':'two'}, {'title':'three'}],date:"2018-11-01"};
    const wrapper = shallow(<ChannelList list={list} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-list')).toBeDefined();
    expect(wrapper.find('.channel-list')).toMatchSnapshot();
  });

  it('renders a ChannelDate component ', () => {
    const list = {data:[{'title':'one'}, {'title':'two'}, {'title':'three'}],date:"2018-11-01"};
    const wrapper = shallow(<ChannelList list={list} />);

    // Check if an element in the Component exists
    expect(wrapper.find('ChannelDate').length).toEqual(1);
  });

  it('renders a list of Channel components ', () => {
    const list = {data:[{'title':'one'}, {'title':'two'}, {'title':'three'}],date:"2018-11-01"};
    const wrapper = shallow(<ChannelList list={list} />);

    // Check if an element in the Component exists
    expect(wrapper.find('Channel').length).toEqual(list.data.length);
  });

});
