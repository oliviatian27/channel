import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const ChannelDate =({date}) =>{

    return (
      <div className="channel-date">
         <Moment format="ddd, MMMM DD, YYYY">
              {date}
         </Moment >
      </div>
    );
}

ChannelDate.propTypes={
  date:PropTypes.string
}

ChannelDate.defaultProps = {
  date:""
}

export default ChannelDate;
