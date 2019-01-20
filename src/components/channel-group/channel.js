import React, { Component } from 'react';

const Channel =({data}) =>{

    return (
      <div className="App">
         {data.title}
         {data.description}

      </div>
    );

}

export default Channel;
