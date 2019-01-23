import React from 'react';
import { shallow } from 'enzyme';

import InstructorName from '../components/channel-list/channel-instructor/channel-instructor-name';


describe('InstructorName tests', () => {

  it('renders InstructorName component', () => {
    const instructorName = "one";
    const wrapper = shallow(<InstructorName instructorName={instructorName} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.instructor-name')).toBeDefined();
    expect(wrapper.find('.instructor-name')).toMatchSnapshot();
  });

  it('displays the correct instructorName based on props.instructorName', () => {
    const instructorName = "one";
    const wrapper = shallow(<InstructorName instructorName={instructorName} />);

    // Expect the instructorName text to be props.instructorName
    expect(wrapper.find('.instructor-name').text()).toBe(instructorName);

    // update the instructorName props
    wrapper.setProps({instructorName:"two"})

    // Expect the instructorName text to be the updated instructorName
    expect(wrapper.find('.instructor-name').text()).toBe("two");
  });
})
