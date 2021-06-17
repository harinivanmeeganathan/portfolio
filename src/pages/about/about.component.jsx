import React from 'react';
import {FaJava} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaNode} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {DiJavascript1} from 'react-icons/di';
import {SiCplusplus} from 'react-icons/si';
import {GrMysql} from 'react-icons/gr';
import {GiStarsStack} from 'react-icons/gi';
import './about.styles.scss';

const About = () => {
    return(
    <div className = 'about-container'>
        <div className = 'left-container'>
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
        <div className = 'right-conatiner'>
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
        <div className = 'bottom-container'>
        <div className = 'skill-header'>
            <h1 className = 'skills'>
                <GiStarsStack className ='stars'/> SKILLS</h1>
        </div>
        <div className = 'grid-bottom'>
           <h2 className = 'icon'><FaReact className = 'ic'/> REACTJS</h2>
           <h2 className = 'icon'><FaNode className = 'ic'/> NODEJS</h2>
           <h2 className = 'icon'><DiJavascript1 className = 'ic'/> EXPRESSJS</h2>
           <h2 className = 'icon'><FaSass className = 'ic'/> SASS</h2>
           <h2 className = 'icon'><DiJavascript1 className = 'ic'/> JAVASCRIPT</h2>
           <h2 className = 'icon'><FaJava className = 'ic'/> JAVA</h2>
           <h2 className = 'icon'><SiCplusplus className = 'ic'/> C++</h2>
           <h2 className = 'icon'><GrMysql className = 'ic'/> SQL</h2> 
        </div>
        </div>
    </div>
    );
}

export default About;
