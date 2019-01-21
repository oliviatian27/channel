import React, { Component } from 'react';
import Moment from 'react-moment';

const ChannelDate =({date}) =>{

    return (
      <div className="channel-date">
         <span className="date">
             <Moment format="ddd, MMMM DD, YYYY">
                {date}
             </Moment >
         </span>
      </div>
    );
}

export default ChannelDate;
