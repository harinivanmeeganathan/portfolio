import React from 'react';
import ParticlesBackground from '../../components/particles/particles.component';
import './resume.styles.scss';

const Resume = () => {
return(
<div>
    <ParticlesBackground/>
    <div className = 'resume-container'>
        <h1 className = 'resume-title'>Resume</h1> 
                
    <div className = 'resume'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className = 'l-side'>
            <div className = 'l-boxes'>
            <div className = 'lbox'>
                <div className = 'head'><label>OBJECTIVE</label></div>
                    <div className = 'content'><label  className = 'l-list'>Self-motivated, highly passionate and hardworker looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organisation.</label></div>
                    </div>
            <div className = 'lbox'>
            <div className = 'head'><label>SKILLSET</label></div>
            <div className = 'content'>
            <label className = 'l-list'>
            <ul>
                <li>Skilled in Web Development: HTML5, CSS3, SCSS,
                    JavaScript, NodeJS, ExpressJS, ReactJS</li>
                <li>SKILLS Programming languages: C, C++, Java, SQL</li>
                <li>Version control system: Github, Gitlab, SVN</li>
            </ul>
            </label>
            </div>
            </div>
                <div className = 'lbox'>
                <div className = 'head'><label>PERSONALITY TRAITS</label></div>
                <div className = 'content'>
                <label  className = 'l-list'>
                <ul>
                    <li>Positive Thinker</li>
                    <li>Enthusiastic</li>
                    <li>Work Ethic</li>
                </ul>
                </label>
                </div>
                </div>

            </div>

        </div>

        <div className = 'r-side'>
            <div className = 'name-box'>
                <label className = 'name-value'>Harini Vanmeeganathan</label>
            </div>
            <div className = 'r-boxes'>
            <div className = 'r-box'>
            <div className = 'head1'>
            <label> EDUCATION</label>
            </div>
            <div className = 'content1'>
        <label  className = 'r-list'>
        <ul>   
        <li>
            <p>BACHELOR OF COMPUTER SCIENCE AND ENGINEERING [2016 - 2020]</p>
            <p>[Velammal Institute of technology]</p>
            <p>I pursued my gradution in computer science and engineering with overall CGPA 8.53</p>
        </li> 
        <li>
            <p>HSC (12TH), STATE-BOARD [2015 - 2016]</p>
            <p>[Doveton Matriculation Higher Secondary School]</p>
            <p>I have completed my 12th from State board with overall 88%</p>
        </li>
        <li>
            <p>SSLC (10TH), STATE-BOARD [2013 - 2014]</p>
            <p>[Doveton Matriculation Higher Secondary School]</p>
            <p>I have completed my 10th from State board with overall 93%</p>
        </li>
        </ul> 
        </label>
            </div>
            </div>
            <div className = 'r-box'>
            <div className = 'head1'>
            <label>PROFESSIONAL EXPERIENCE</label>
            </div>
            <div className = 'content1'>
            <label  className = 'r-list'>    
                <ul>   
            <li>
                <p>Associate Software Engineer, Solartis [June 2020 - Present]</p>
                <p>[Solartis Technology Services Pvt Ltd, Chennai]</p>
                <p>Working as a developer in PRODUCT MANAGEMENT TOOLKIT, 
                helps to create and maintain various insurance carrier activities which is 
                developed using JSF, Drools and MySQL Database.
                </p>
            </li> 
            </ul> 
            </label>
            </div>
            </div>
            <div className = 'r-box'>
            <div className = 'head1'>
            <label>INTERNSHIP</label>
            </div>
            <div className = 'content1'>
            <label  className = 'r-list'>    
                <ul>   
            <li>
                <p>Software Developer Intern, Solartis [January 2020 - March 2020]</p>
                <p>[Solartis Technology Services Pvt Ltd, Chennai]</p>
                <p>Insurance Basics and Insurance Flow</p>
                <p>Developed a web application for an event insurance project using JSF, Drools and MySQL.</p>
            </li> 
            </ul> 
            </label>
            </div>
            </div>

            </div>
        </div>                
        </div>
    </div>
</div>

  

);

}

export default Resume;