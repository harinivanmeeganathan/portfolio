import React from 'react';
import {FaJava} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaNode} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {SiCplusplus} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';         
import {GiStarsStack} from 'react-icons/gi';

import Fade from 'react-reveal/Fade';
import './about.styles.scss';


const About = () => {
    return(

<div className = 'about-container'>
   <h1 className = 'aboutme'>About Me!</h1> 
        <Fade left>      
          <div className = 'left-container'>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
            <ul className = 'ul'>
                <li className = 'li'>BORN PLACE</li>
                <li className = 'val'>VELLORE, TAMIL NADU</li>
                <li className = 'li'>RESIDENCE</li>
                <li className = 'val'>CHENNAI, TAMIL NADU</li>
                <li className = 'li'>EDUCATION</li>
                <li className = 'val'>BACHELOR OF COMPUTER SCIENCE AND ENGINEERING</li>
                <li className = 'li'>MAIL ME</li>
                <li className = 'val'>harinivanmeeganathan@gmail.com</li>
            </ul>
            
        </div>    
        </Fade>

        <Fade right delay = {1000}>  
        <div className = 'right-conatiner'>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
            <div className = 'intro'>
                <h2 className = 'name'>
                    Hi, I'm Harini Vanmeeganathan
                </h2>
                <h3 className = 'work'>
                    Currently working as a Software Developer @ solartis.pvt.ltd
                </h3>
                <div className = 'para'>

                </div>
            </div> 
         
        </div>
     </Fade>

     <Fade bottom delay = {1000}>  
        <div className = 'bottom-container'>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
            <span className='lines'></span>
        <div className = 'skill-header'>
            <h1 className = 'skills'>
                <GiStarsStack className ='stars'/> SKILLS</h1>
        </div>

    <div className = 'grid-bottom'>
        <div className = 'icon'><FaReact className = 'ic'/><label>REACTJS</label></div>
        <div className = 'icon'><FaNode className = 'ic'/> <label>NODEJS</label></div>
        <div className = 'icon'><DiJavascript1 className = 'ic'/><label>EXPRESSJS</label></div>
        <div className = 'icon'><FaSass className = 'ic'/><label>SASS</label></div>
        <div className = 'icon'><DiJavascript1 className = 'ic'/><label>JAVASCRIPT</label></div>
        <div className = 'icon'><FaJava className = 'ic'/><label>JAVA</label></div>
        <div className = 'icon'><SiCplusplus className = 'ic'/><label>C++</label></div>
        <div className = 'icon'><GrMysql className = 'ic'/><label>SQL</label></div> 
    </div>
        </div>
    </Fade>
    </div>
   
    );
}

export default About;
