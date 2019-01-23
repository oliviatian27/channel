import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

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

ChannelTime.propTypes={
  time:PropTypes.string
}

ChannelTime.defaultProps = {
  time:""
}

export default ChannelTime;
