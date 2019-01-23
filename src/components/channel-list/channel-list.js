import React from 'react';

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

export default ChannelList;
