import React from 'react'

function Skills(props) {

    let {SkillName}=props;
    
  return (
    <div >
        <ul>
            <li><h3>{SkillName}</h3></li>
        </ul>
    </div>
  )
}

export default Skills