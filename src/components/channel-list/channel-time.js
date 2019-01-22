import React from 'react';
import Moment from 'react-moment';

const ChannelTime =({time}) =>{

    return (
        <div className="channel-time">
          <Moment format="LT [-]">
            <span className="start">
              {time}
            </span>
          </Moment >

          <Moment add={{ hours: 1 }} format=" LT [EDT]">
            <span className="end">
               {time}
            </span>
          </Moment>
         </div>
    );

}

export default ChannelTime;
