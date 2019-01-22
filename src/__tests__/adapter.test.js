import React from 'react';
import { shallow } from 'enzyme';

import loadFromServer from '../utils/adapter';


describe('loadFromServer tests', () => {

  it('renders loadFromServer', () => {
    const successMock = jest.fn();

    const fakeData = [{"title":"1","time": "2018-01-03 22:00:00"},{"title":"2","time": "2018-01-04 10:00:00"},
    {"title":"3","time": "2018-01-03 12:00:00"},{"title":"4","time": "2018-01-04 11:00:00"}]

    const expectedData=  [{"data": [{"time": "2018-01-03 12:00:00", "title": "3"},
    {"time": "2018-01-03 22:00:00", "title": "1"}], "date": "2018-01-03"},
    {"data": [{"time": "2018-01-04 10:00:00", "title": "2"},
    {"time": "2018-01-04 11:00:00", "title": "4"}], "date": "2018-01-04"}]
    // setup the fetch mock
    fetch.mockResponse(JSON.stringify(fakeData), {status: 200});

    // return the promise back to Jest to make sure Jest waits correctly
    return loadFromServer(successMock)
        .then(() => {
            expect(successMock.mock.calls[0][0]).toEqual(expectedData);
        });
  });

})
