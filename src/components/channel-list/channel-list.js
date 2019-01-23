import React from 'react';
import PropTypes from 'prop-types';

import ChannelDate from './channel-date'
import Channel from './channel'

const ChannelList =({list}) =>{
    return (
      <div className="channel-list">
         <ChannelDate date={list.date}/>
         {list.data.map((data,idx)=><Channel key={idx} data={data} />)}
      </div>
    );

}

ChannelList.propTypes={
  list:PropTypes.object
}

ChannelList.defaultProps = PropTypes.shape({
    date: PropTypes.string,
    data: PropTypes.array
})

export default ChannelList;
