import React from 'react';
import { shallow } from 'enzyme';

import ChannelSubjectPhoto from '../components/channel-list/channel-subject-photo';


describe('ChannelSubjectPhoto tests', () => {

  it('renders ChannelSubjectPhoto', () => {
    const subjectPhotoUrl = "some url";
    const wrapper = shallow(<ChannelSubjectPhoto subjectPhotoUrl={subjectPhotoUrl} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-subject-photo')).toBeDefined();
    expect(wrapper.find('.channel-subject-photo')).toMatchSnapshot();
  });

  it('displays the correct subjectPhoto based on props.subjectPhotoUrl', () => {
    const subjectPhotoUrl = "one";
    const wrapper = shallow(<ChannelSubjectPhoto subjectPhotoUrl={subjectPhotoUrl} />);

    // Expect the img src url to be props.subjectPhotoUrl
    expect(wrapper.find('img').prop("src")).toEqual(subjectPhotoUrl);

    // update the subjectPhotoUrl props
    wrapper.setProps({subjectPhotoUrl:"two"})

    expect(wrapper.find('img').prop("src")).toEqual("two");
  });

})
