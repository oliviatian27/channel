import React from 'react';
import Moment from 'react-moment';

const ChannelDate =({date}) =>{

    return (
      <div className="channel-date">
         <Moment format="ddd, MMMM DD, YYYY">
              {date}
         </Moment >
      </div>
    );
}

export default ChannelDate;
