import React from 'react';
import { shallow } from 'enzyme';

import ChannelSubjectPhoto from '../components/channel-list/channel-subject-photo';


describe('ChannelSubjectPhoto tests', () => {

  it('renders ChannelSubjectPhoto', () => {
    const Url = "some url";
    const wrapper = shallow(<ChannelSubjectPhoto photoUrl={Url} />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.channel-subject-photo')).toBeDefined();
    expect(wrapper.find('img').prop("src")).toEqual(Url);
  });

})
