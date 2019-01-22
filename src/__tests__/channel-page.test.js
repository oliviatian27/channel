import React from 'react';
import { shallow,mount,render } from 'enzyme';

import ChannelPage from '../containers/ChannelPage';
import loadFromServer from '../utils/adapter'

describe('ChannelPage tests', () => {

  it('current state render', () => {
  //   beforeEach(() => {
  //   fetch.resetMocks()
  // })
    const fakeData = [{"title":"1","time": "2018-01-03 22:00:00"},{"title":"2","time": "2018-01-04 10:00:00"},
    {"title":"3","time": "2018-01-03 12:00:00"},{"title":"4","time": "2018-01-04 11:00:00"}]

    // const flushPromises=()=>( new Promise(resolve => setImmediate(resolve)))

    fetch.mockResponse(JSON.stringify(fakeData), {status: 200});


    const wrapper = mount(<ChannelPage />)


    // componentDidMount has been run, but the then()-function of
    // the promise (returned from fetch) has not been executed
    //  => callback not invoked
    //  => setState not invoked
    //  => no rendering of channel page

    expect(wrapper.find('.loading')).toHaveLength(1);
    expect(wrapper.find('.container')).toHaveLength(0);

    loadFromServer((json) => {
        // then()-function has now been executed
        //  => success-callback is called
        //  => setState is called
        //  => new_wrapper is re-rendered with fakeData we passed to our mock
        wrapper.setState({channelList:json})
        // const new_wrapper = wrapper.render()
        //
        expect(wrapper.find('Channel').length).toEqual(fakeData.length);
        expect(wrapper.find('.loading')).toHaveLength(0);
        //
        // // just to make sure: fetch should have been called exactly once
        // expect(fetch.mock.calls).toHaveLength(1);

        //expect to render two ChannelList components 2018-01-03 and 2018-01-04
        expect(wrapper.find('ChannelList').length).toEqual(2);
        expect(wrapper.find('ChannelDate').at(0).prop("date")).toEqual("2018-01-03");
        expect(wrapper.find('ChannelDate').at(1).prop("date")).toEqual("2018-01-04");

        wrapper.unmount()
    });

  });

  it('renders ChannelPage', () => {
    const wrapper = shallow(<ChannelPage />)

    // Expect the wrapper object to be defined
    expect(wrapper.find('.container')).toBeDefined();
    expect(wrapper.find('.container')).toMatchSnapshot();
  });



})
