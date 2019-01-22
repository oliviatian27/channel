import React from 'react';
import { shallow,mount,render } from 'enzyme';

import ChannelPage from '../containers/ChannelPage';


describe('ChannelPage tests', () => {

  it('current state render', () => {
    const fakeData = [{"title":"1","time": "2018-01-03 22:00:00"},{"title":"2","time": "2018-01-04 10:00:00"},
    {"title":"3","time": "2018-01-03 12:00:00"},{"title":"4","time": "2018-01-04 11:00:00"}]

    const flushPromises=()=>( new Promise(resolve => setImmediate(resolve)))

    fetch.mockResponse(JSON.stringify(fakeData), {status: 200});


    const wrapper = mount(<ChannelPage />)

    // This expects are only just to make the problem visible:
    // componentDidMount has been run, but the then()-function of
    // the promise (returned from fetch) has not been executed
    //  => callback not invoked
    //  => setState not invoked
    //  => no rendering of channel page

    expect(wrapper.find('.loading')).toHaveLength(1);
    expect(wrapper.find('.container')).toHaveLength(0);

    return flushPromises().then(() => {
        // then()-function has now been executed
        //  => success-callback is called
        //  => setState is called
        //  => new_wrapper is re-rendered with fakeData we passed to our mock
        const new_wrapper = wrapper.render()
        expect(new_wrapper.find('.channel').length).toEqual(fakeData.length);
        expect(new_wrapper.find('.loading')).toHaveLength(0);

        // just to make sure: fetch should have been called exactly once
        expect(fetch.mock.calls).toHaveLength(1);
    });

  });

  it('renders ChannelPage', () => {
    const wrapper = shallow(<ChannelPage />)
    // Expect the wrapper object to be defined
    expect(wrapper.find('.container')).toBeDefined();
  });



})
