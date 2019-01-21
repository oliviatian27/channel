import React from 'react';

const ChannelSubjectPhoto =({photoUrl}) =>{

    return (
      <div className="channel-subject-photo">
         <img src={photoUrl} alt="channel-subject" />
      </div>
    );

}

export default ChannelSubjectPhoto;
