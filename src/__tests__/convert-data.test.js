import convertData from '../utils/convert-data'

describe('convertData tests', () => {

  it('converts data', () => {
    const data=[{"title":"1","time": "2018-01-03 22:00:00"},{"title":"2","time": "2018-01-04 10:00:00"},
    {"title":"3","time": "2018-01-03 12:00:00"},{"title":"4","time": "2018-01-04 11:00:00"}]

    const convertedData=[{"date":"2018-01-03","data":
    [{"title":"3","time":"2018-01-03 12:00:00"},{"title":"1","time":"2018-01-03 22:00:00"}]},
    {"date":"2018-01-04","data":
    [{"title":"2","time":"2018-01-04 10:00:00"},{"title":"4","time":"2018-01-04 11:00:00"}]}]

    // Expect convertData function to return the correct result
    expect(convertData(data)).toEqual(convertedData);
  });
})
