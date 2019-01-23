import React from 'react';
import Moment from 'react-moment';

const ChannelTime =({time}) =>{

    return (
        <div className="channel-time">
          <Moment format="LT [-]" >
             {time}
          </Moment >

          <Moment add={{ hours: 1 }} format=" LT [EDT]" >
             {time}
          </Moment>
         </div>
    );

}

export default ChannelTime;
