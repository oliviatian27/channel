import React from 'react';
import { shallow } from 'enzyme';

import ChannelDetail from '../components/channel-list/channel-detail';


describe('ChannelDetail tests', () => {

  it('renders ChannelDetail component', () => {
    const title = "apple";
    const description = "pear"
    const wrapper = shallow(<ChannelDetail title={title} description={description} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-detail')).toBeDefined();
    expect(wrapper.find('.channel-detail')).toMatchSnapshot();
  });

  it('renders ChannelTitle and ChannelDescription components and pass down the correct props', () => {
    const title = "apple";
    const description = "pear"

    const wrapper = shallow(<ChannelDetail title={title} description={description} />);

    // Check if the prop in the child Component is correct
    expect(wrapper.find('ChannelTitle').prop("title")).toEqual("apple");
    expect(wrapper.find('ChannelDescription').prop("description")).toEqual("pear");

    const newTitle = "peach";
    const newDescription = "grape"

   //update the props to check if the new prop passed down to the children component
   wrapper.setProps({ title: newTitle,description:newDescription });

   expect(wrapper.find('ChannelTitle').prop("title")).toEqual("peach");
   expect(wrapper.find('ChannelDescription').prop("description")).toEqual("grape");
  });

})
