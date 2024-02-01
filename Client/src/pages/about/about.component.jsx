import React from 'react';
import TechSkills from '../../components/skills/skills.component';
import Fade from 'react-reveal/Fade';
import {Details} from '../../models/about';
import './about.styles.scss';

const aboutDetails = (details) => (
    details.map(detail => (
        <ul className='ul'>
            <li className='li'>{detail.title}</li>
            <li className='val'>{detail.value}</li>
        </ul>               
   
    ))
)
const About = () => {
    return (
        <div>
            <div className='about-container'>
                <h1 className='aboutme'>About Me!</h1>
                <Fade left>
                    <div className='left-container'>
                    {aboutDetails(Details)}
                    </div>
                </Fade>

                <Fade right delay={1000}>

                    <div className='right-conatiner'>
                        <div className='intro'>
                            <h2 className='name'>
                                Salutations, Harini Vanmeeganathan Lakshmi!
                            </h2>
                            <h3 className='work'>
                            I am currently pursuing a Master of Science (MS) in Data Science with a specialization in Artificial Intelligence Analytics at La Trobe University. 
                            </h3>
                            <div className='para'>
                                <label>With over three years of hands-on experience as a Full Stack Developer, I've had the privilege to immerse myself in a dynamic IT environment. My journey has led me to work extensively with technologies such as ReactJs, Java, Spring Boot microservices, and PostgreSQL. To solve problems in a creative and effective manner in a challenging position.
                                </label>
                            </div>
                        </div>

                    </div>
                </Fade>

                <Fade bottom delay={1000}>
                    <div className='bottom-container'>
                        <h1>Professional Skills</h1>
                        <TechSkills />
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default About;
