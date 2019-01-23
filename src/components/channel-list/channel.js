import React from 'react';
import PropTypes from 'prop-types';

import ChannelSubjectPhoto from './channel-subject-photo'
import ChannelDetail from './channel-detail'
import ChannelInstructor from './channel-instructor'
import ChannelTime from './channel-time'

const Channel =({data}) =>{

    return (
      <div className="channel">
         <ChannelSubjectPhoto subjectPhotoUrl={data.subjectPhotoUrl} />
         <ChannelDetail title={data.title} description={data.description} />
         <ChannelInstructor instructorName={data.instructorName} instructorPhotoUrl={data.instructorPhotoUrl} />
         <ChannelTime time={data.time} />
      </div>
    );

}

Channel.propTypes={
  data:PropTypes.object
}

Channel.defaultProps = {
  data:{}
}

export default Channel;
