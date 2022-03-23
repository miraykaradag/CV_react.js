import './App.css';
import EducationInformation from './components/EducationInformation';
import JobExperience from './components/JobExperience';
import Skills from './components/Skills';
import { useState } from 'react';
import Contact from './components/Contact';
function App() {


  return (
    <div className="App">
     
      <h1>MİRAY KARADAG</h1>
      <h2>Jr. Frontend Developer</h2>

      <hr />
      <p>Hi I am Miray Karadağ, I am Computer Engineering student at Trakya University(3/4). </p>
      <p>I am Social, Interested in research, able to apply what they have learned, able to work collaboratively with the team. </p>
      
      <div className="experience">

        <h1>Work Experience</h1>
        <hr />
        <JobExperience
            Company={"İbb Bimtaş A.Ş"}
            Position={"Intern-Frontend"}
            Date={"August 2021-September 2021"}
            JobDescription={"I Improved myself with JavaScript and it'S library Leaflef.js and i developed frontend."}
            
        />
        <hr />
        <JobExperience
            Company={"Fetalist"}
            Position={"Intern-Frontend"}
            Date={"August 2021-September 2021"}
            JobDescription={"Sample designs were made for the front of the website. Experienced animation using Adobe After Effects. AWS architecture was investigated."}
        />
        <br />
          
          </div>
          

        <h1>Education Information</h1>
        <hr />
          <EducationInformation

          School={"Sefaköy Anadolu Lisesi"}
          Date={"2014-2018"}
          GradeAverage={"82.63/100"}
          
          />
          <hr />

        <EducationInformation

          School={"Trakya Üniversitesi"}
          Departmant={"Computer Engineering"}
          Date={"2019-currently"}
          GradeAverage={"3.37/4"}

/>
            
            <r />
            

        <div className="skills">
        <h1>SKILLS</h1>
            <hr />
        <h2>PROGRAMMING LANGUAGES</h2>
        <Skills SkillName= {"HTML-CSS | ★★★★★"}/> 
          <ul>
            <li> Div-based responsive designs.</li>
            <li> Up-to-date tool knowledge such as Bootstrap.</li>
          </ul>

          <Skills SkillName= {"JAVASCRIPT | ★★★★"}/> 
          <ul>

            <li>DOM Management with jQuery, dynamic designs.</li>
            <li>Using the React.JS Library.</li>
            <li>Node.js little hassle.</li>
            <li>Knowledge of REST API usage.</li>
            <li>Knowledge of Fetch, Promise, Await structures.</li>

          </ul>

          <Skills SkillName= {"JAVA | ★★"}/>
          <Skills SkillName= {"PYTHON | ★★"}/> 
          <hr />
        
           <h2>DATABASE MANAGEMNT</h2>
        <Skills SkillName= {"SQL | ★★★"}/> 
        <Skills SkillName= {"ORACLE | ★★"}/> 


<hr />
        <h2>OPERATING SYSTEMS</h2>
        <Skills SkillName= {"WINDOWS OS | ★★★★★"}/> 
        <Skills SkillName= {"MAC OS | ★★★"}/> 
        <br />

        <hr />
        
        </div>
         
        <h1>CONTACT</h1>

        <br />
        <hr />

        <div className="contact">

        <Contact Address={"Adres1: Küçükçekmece,İstanbul"}/>
        <Contact Address={"Adres2: Merkez,Edirne"}/>
        <Contact Email={"E-mail: miraykaradag88@gmail.com"}/>
        <Contact Linkedin={"Linkedin: miraykaradag"}/>
        <Contact Github={"Github: miraykaradag"}/>
        <Contact Telephone={"Telephone: 535*** ** **"}/>
        </div>


           

    </div>
  );
}

export default App;
