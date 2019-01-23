import React from 'react';
import PropTypes from 'prop-types';

const InstructorPhoto =({instructorPhotoUrl}) =>{

    return (
        <div className="instructor-photo">
         <img src={instructorPhotoUrl} alt="instructorPhoto" />
        </div>
    );
}

InstructorPhoto.propTypes={
  instructorPhotoUrl:PropTypes.string
}

InstructorPhoto.defaultProps = {
  instructorPhotoUrl:""
}

export default InstructorPhoto;
