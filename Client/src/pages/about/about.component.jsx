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
                                It's me, Harini Vanmeeganathan Lakshmi
                            </h2>
                            <h3 className='work'>
                                Currently pursuing Master's in Data Science at the LA TROBE UNIVERSITY, Melbourne, Victoria, Australia.
                            </h3>
                            <div className='para'>
                                <label>I am extremely motivated to constantly develop my skills and grow professionally. I am confident
                                    in my ability to gain an exposure that would help me to build a strong and successful career. To solve problems in a creative and effective manner in a challenging position.
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
