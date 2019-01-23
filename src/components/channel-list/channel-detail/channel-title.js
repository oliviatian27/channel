import React from 'react';
import PropTypes from 'prop-types';

const ChannelTitle =({title}) =>{

    return (
        <div className="channel-title">
          {title}
         </div>
    );
}

ChannelTitle.propTypes={
  title:PropTypes.string
}

ChannelTitle.defaultProps = {
  title:""
}

export default ChannelTitle;
