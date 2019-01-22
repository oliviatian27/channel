import React, { Component } from 'react';
import Moment from 'react-moment';

const ChannelDate =({date}) =>{

    return (
      <div className="channel-date">
             <Moment format="ddd, MMMM DD, YYYY">
                <span className="date">
                  {date}
                 </span>
             </Moment >
      </div>
    );
}

export default ChannelDate;
