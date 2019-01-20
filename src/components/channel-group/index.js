import React, { Component } from 'react';
import Moment from 'react-moment';

import Channel from './channel'

const ChannelGroup =({group}) =>{

    return (
      <div className="channel-group">
         <Moment format="ddd,MMMM DD,YYYY">
            {group.date}
         </Moment >
         {group.data.map(data=><Channel data={data} />)}
      </div>
    );

}

export default ChannelGroup;
