import React from 'react';

import ChannelSubjectPhoto from './channel-subject-photo'
import ChannelDetail from './channel-detail'
import ChannelInstructor from './channel-instructor'
import ChannelTime from './channel-time'

const Channel =({data}) =>{

    return (
      <div className="channel">
         <ChannelSubjectPhoto photoUrl={data.subjectPhotoUrl} />
         <ChannelDetail title={data.title} description={data.description} />
         <ChannelInstructor instructorName={data.instructorName} instructorPhotoUrl={data.instructorPhotoUrl} />
         <ChannelTime time={data.time} />
      </div>
    );

}

export default Channel;
