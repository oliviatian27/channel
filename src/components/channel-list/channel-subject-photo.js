import React from 'react';
import PropTypes from 'prop-types';

const ChannelSubjectPhoto =({subjectPhotoUrl}) =>{

    return (
      <div className="channel-subject-photo">
         <img src={subjectPhotoUrl} alt="channel-subject" />
      </div>
    );
}

ChannelSubjectPhoto.propTypes={
  subjectPhotoUrl:PropTypes.string
}

ChannelSubjectPhoto.defaultProps = {
  subjectPhotoUrl:""
}

export default ChannelSubjectPhoto;
