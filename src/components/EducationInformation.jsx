import React from 'react'

function EducationInformation(props) {
    let {School,Departmant,Date, GradeAverage}=props

  return (
    <div className='education'> 
        <h3>{School}</h3>
        <h4>{Departmant} | {Date}</h4>
        <h3>{GradeAverage}</h3>

    </div>
  )
}

export default EducationInformation