import React from 'react'

function JobExperience(props) {

    let {Company,Position,Date,JobDescription}=props;
  return (

    <div>
        <h3>{Company} | {Position}</h3>
        <h4>{Date}</h4>
        <h3>{JobDescription}</h3>


    </div>
  )
}

export default JobExperience;