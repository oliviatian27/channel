import React from 'react';

import InsructorName from './instructor-name'
import InstructorPhoto from './instructor-photo'

const ChannelInstructor =({instructorName,instructorPhotoUrl}) =>{

    return (
      <div className="channel-instructor">
      <InstructorPhoto instructorPhotoUrl={instructorPhotoUrl} />
      <InsructorName instructorName={instructorName} />
      </div>
    );

}

export default ChannelInstructor;
