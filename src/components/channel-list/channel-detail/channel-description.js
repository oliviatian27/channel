import React from 'react';
import PropTypes from 'prop-types';

const ChannelDescription =({description}) =>{

    return (
        <div className="channel-description">
         <p>{description}</p>
        </div>
    );
}

ChannelDescription.propTypes={
  description:PropTypes.string
}

ChannelDescription.defaultProps = {
  description:""
}

export default ChannelDescription;
