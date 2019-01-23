import React from 'react';
import PropTypes from 'prop-types';

const InstructorName =({instructorName}) =>{

    return (
        <div className="instructor-name">
          <span>{instructorName}</span>
         </div>
    );

}

InstructorName.propTypes={
  instructorName:PropTypes.string
}

InstructorName.defaultProps = {
  instructorName:""
}

export default InstructorName;
