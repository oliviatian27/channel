import React from 'react';
import { shallow } from 'enzyme';

import ChannelPage from '../containers/ChannelPage';


describe('ChannelPage tests', () => {

  it('renders ChannelPage', () => {

    const wrapper = shallow(<ChannelPage />);

    // Expect the wrapper object to be defined
    expect(wrapper.find('.container')).toBeDefined();
  });

  it('has an initial state with text key set to empty array', () => {
    const wrapper = shallow(<ChannelPage />)

    expect(wrapper.state('channelList')).toEqual([])
  });

})
