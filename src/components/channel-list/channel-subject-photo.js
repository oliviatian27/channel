import React from 'react';

const ChannelSubjectPhoto =({subjectPhotoUrl}) =>{

    return (
      <div className="channel-subject-photo">
         <img src={subjectPhotoUrl} alt="channel-subject" />
      </div>
    );
}

export default ChannelSubjectPhoto;
