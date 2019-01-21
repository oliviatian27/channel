import React from 'react';

const InstructorPhoto =({instructorPhotoUrl}) =>{

    return (
        <div className="instructor-photo">
         <img src={instructorPhotoUrl} alt="instructorPhoto" />
        </div>
    );
}

export default InstructorPhoto;
