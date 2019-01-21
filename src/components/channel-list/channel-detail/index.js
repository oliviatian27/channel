import React from 'react';

import ChannelTitle from './channel-title'
import ChannelDescription from './channel-description'

const ChannelDetail =({title,description}) =>{

    return (
      <div className="channel-detail">
         <ChannelTitle title={title} />
         <ChannelDescription description={description} />
      </div>
    );

}

export default ChannelDetail;
