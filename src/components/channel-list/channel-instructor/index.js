import React from 'react';

import InstructorName from './channel-instructor-name'
import InstructorPhoto from './channel-instructor-photo'

const ChannelInstructor =({instructorName,instructorPhotoUrl}) =>{

    return (
      <div className="channel-instructor">
      <InstructorPhoto instructorPhotoUrl={instructorPhotoUrl} />
      <InstructorName instructorName={instructorName} />
      </div>
    );

}

export default ChannelInstructor;
