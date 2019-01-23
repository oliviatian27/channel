import React from 'react';
import { shallow } from 'enzyme';

import ChannelInstructor from '../components/channel-list/channel-instructor';


describe('ChannelInstructor tests', () => {

  it('renders ChannelInstructor component', () => {
    const Url = "apple";
    const Name = "pear"

    const wrapper = shallow(<ChannelInstructor instructorPhotoUrl={Url} instructorName={Name} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-instructor')).toBeDefined();
    expect(wrapper.find('.channel-instructor')).toMatchSnapshot();
  });

  it('renders InstructorPhoto and instructorName components and pass down the correct props', () => {
    const Url = "apple";
    const Name = "pear"

    const wrapper = shallow(<ChannelInstructor instructorPhotoUrl={Url} instructorName={Name} />);

    // Check if the prop in the child Component is correct
    expect(wrapper.find('InstructorPhoto').prop("instructorPhotoUrl")).toEqual(Url);
    expect(wrapper.find('InstructorName').prop("instructorName")).toEqual(Name);

    const newUrl = "peach";
    const newName = "grape"

   //update the props to check if the new prop passed down to the children component
   wrapper.setProps({ instructorPhotoUrl: newUrl,instructorName:newName });

   expect(wrapper.find('InstructorPhoto').prop("instructorPhotoUrl")).toEqual(newUrl);
   expect(wrapper.find('InstructorName').prop("instructorName")).toEqual(newName);
  });

})
