import React from 'react';
import { shallow } from 'enzyme';

import Channel from '../components/channel-list/channel';


describe('Channel tests', () => {

  it('renders Channel component', () => {
    const data = {title:"one",date:"2018-11-01"};
    const wrapper = shallow(<Channel data={data} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel')).toBeDefined();
    expect(wrapper.find('.channel')).toMatchSnapshot();
  });

  it('renders 4 corresponding components ', () => {
    const data = {title:"one",date:"2018-11-01"};
    const wrapper = shallow(<Channel data={data} />);

    // Check if all 4 children Component exists
    expect(wrapper.find('ChannelSubjectPhoto').length).toEqual(1);
    expect(wrapper.find('ChannelDetail').length).toEqual(1);
    expect(wrapper.find('ChannelInstructor').length).toEqual(1);
    expect(wrapper.find('ChannelTime').length).toEqual(1);
  });

  it('renders 4 components and pass down the correct props', () => {
    const data = {
    "title": "horse",
    "description": "dog",
    "instructorName": "cat",
    "instructorPhotoUrl": "fish",
    "subjectPhotoUrl": "bear",
    "time": "bird"
  };
    const wrapper = shallow(<Channel data={data} />);

    // Check if the prop in the child Component is correct
    expect(wrapper.find('ChannelSubjectPhoto').prop("subjectPhotoUrl")).toEqual("bear");
    expect(wrapper.find('ChannelDetail').prop("title")).toEqual("horse");
    expect(wrapper.find('ChannelDetail').prop("description")).toEqual("dog");
    expect(wrapper.find('ChannelInstructor').prop("instructorName")).toEqual("cat");
    expect(wrapper.find('ChannelInstructor').prop("instructorPhotoUrl")).toEqual("fish");
    expect(wrapper.find('ChannelTime').prop("time")).toEqual("bird");

     const newData = {
     "title": "rabbit",
     "description": "sheep",
     "instructorName": "deer",
     "instructorPhotoUrl": "fox",
     "subjectPhotoUrl": "penguin",
     "time": "duck"
   };

   //update the props to check if the new prop passed down to the children component
   wrapper.setProps({ data: newData });

   expect(wrapper.find('ChannelSubjectPhoto').prop("subjectPhotoUrl")).toEqual("penguin");
   expect(wrapper.find('ChannelDetail').prop("title")).toEqual("rabbit");
   expect(wrapper.find('ChannelDetail').prop("description")).toEqual("sheep");
   expect(wrapper.find('ChannelInstructor').prop("instructorName")).toEqual("deer");
   expect(wrapper.find('ChannelInstructor').prop("instructorPhotoUrl")).toEqual("fox");
   expect(wrapper.find('ChannelTime').prop("time")).toEqual("duck");
  });

});
