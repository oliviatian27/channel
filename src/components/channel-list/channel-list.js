import React, { Component } from 'react';
import Moment from 'react-moment';

import ChannelDate from './channel-date'
import Channel from './channel'

const ChannelList =({list}) =>{

    return (
      <div className="channel-list">
         <ChannelDate date={list.date}/>
         {list.data.map(data=><Channel key={data.time} data={data} />)}
      </div>
    );

}

export default ChannelList;
