import React from 'react';
import {Card} from '../components'

function Courses() {
  return (
    <div>
      {Array(6).fill(123).map((obj,index)=>{
        return(
          <Card key={index} />
        )
      })}
    </div>
  )
}

export default Courses;
