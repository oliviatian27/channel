import React from 'react';
import { shallow } from 'enzyme';

import InstructorPhoto from '../components/channel-list/channel-instructor/channel-instructor-photo';


describe('InstructorPhoto tests', () => {

  it('renders InstructorPhoto component', () => {
    const instructorPhotoUrl = "one";
    const wrapper = shallow(<InstructorPhoto instructorPhotoUrl ={instructorPhotoUrl} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.instructor-photo')).toBeDefined();
  });

  it('displays the correct instructorPhoto based on props.instructorPhoto', () => {
    const instructorPhotoUrl = "one";
    const wrapper = shallow(<InstructorPhoto instructorPhotoUrl={instructorPhotoUrl} />);

    // Expect the instructorPhoto url to be props.instructorPhotoUrl
    expect(wrapper.find('img').prop("src")).toEqual(instructorPhotoUrl);
    // update the instructorPhotoUrl props
    wrapper.setProps({instructorPhotoUrl:"two"})

    expect(wrapper.find('img').prop("src")).toEqual("two");
  });
})
