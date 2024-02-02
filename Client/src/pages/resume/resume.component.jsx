import React from 'react';
import './resume.styles.scss';

const Resume = () => {
    return (
        <div>
            <div className='resume-container'>
                <h1 className='resume-title'>Resume</h1>

                <div className='resume'>
                    <div className='l-side'>
                        <div className='l-boxes'>
                            <div className='lbox'>
                                <div className='head'><label>OBJECTIVE</label></div>
                                <div className='content'><label className='l-list'>As a self-motivated and highly passionate tech-savvy go-getter, I am eager to embark on a challenging journey within an organization where I can leverage my skills and knowledge for exponential growth. Currently pursuing a master's in data science, I bring three years of experience as a <b>full-stack developer</b>, combining innovation and dedication to drive success in every project.</label></div>
                            </div>
                            <div className='lbox'>
                                <div className='head'><label>SKILLSET</label></div>
                                <div className='content'>
                                    <label className='l-list'>
                                        <ul>
                                            <li>Skilled in Web Development: HTML5, CSS3, SCSS,
                                                JavaScript, ReactJS, NodeJS, ExpressJS</li>
                                            <li>Programming languages: Python, R, Java</li> 
                                            <li>Advanced Machine Learning Expertise: Neural networks and Machine learning methodologies using TensorFlow, Pandas, NumPy, Matplotlib, Seaborn</li>
                                            <li>Database Mastery: MySQL, PostgreSQL, and MongoDB</li>
                                            <li>Microservices and API Development, AWS Amazon EC2 cloud platform, CI/CD with Jenkins</li>
                                            <li>Version control system: Jupyter Notebook, VS code, Eclipse IDE, Github, Gitlab, SVN</li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                            <div className='lbox'>
                                <div className='head'><label>PERSONALITY TRAITS</label></div>
                                <div className='content'>
                                    <label className='l-list'>
                                        <ul>
                                            <li>Positive Thinker</li>
                                            <li>Enthusiastic</li>
                                            <li>Interpersonal Collaboration</li>
                                            <li>Scheduling Mastery</li>
                                        </ul>
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='r-side'>
                        <div className='name-box'>
                            <label className='name-value'>Harini Vanmeeganathan Lakshmi</label>
                        </div>
                        <div className='r-boxes'>
                            <div className='r-box'>
                                <div className='head1'>
                                    <label> EDUCATION</label>
                                </div>
                                <div className='content1'>
                                    <label className='r-list'>
                                        <ul>
                                            <li>
                                                <p><b>MASTER OF DATA SCIENCE</b> [2023 - 2025]</p>
                                                <p>[La Trobe University, Melbourne, Australia]</p>
                                                <p>• Specialization in <b>Artificial Intelligence analytics</b><br/>
                                                • Courses Taken: Artificial Intelligence, Data Mining, Machine Learning, Natural Language Processing and Computer Vision.
                                                </p>
                                            </li>
                                            <br/>
                                            <li>
                                                <p><b>BACHELOR OF COMPUTER SCIENCE AND ENGINEERING</b> [2016 - 2020]</p>
                                                <p>[Anna University, Chennai, India]</p>
                                                <p>• Graduated four-year study with a First-class distinction and developed a working module for the Project work subject in the final semester.</p>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                            <div className='r-box'>
                                <div className='head1'>
                                    <label>PROFESSIONAL EXPERIENCE</label>
                                </div>
                                <div className='content1'>
                                    <label className='r-list'>
                                        <ul>
                                            <li>
                                                <p><b>Engineer II - Full Stack Developer, Verizon</b> [February 2022 - February 2023]</p>
                                                <p>[Verizon Global Services, Chennai, India]</p>
                                                <p>Developed a web application that processed, analyzed, and visualized data for Associate Recruiting Bolt-On under HCM customs. Enacted SSO security service on the front-end React application for Human Capital Management Custom Bolt-on application. Analyzed and developed API calls for token service and notification service using Java Spring Boot Framework and PostgreSQL.
                                                </p>
                                            </li>
                                            <br/>
                                            <li>
                                                <p><b>Associate Software Engineer, Solartis</b> [June 2020 - February 2022]</p>
                                                <p>[Solartis Technology Services Pvt Ltd, Chennai, India]</p>
                                                <p>Working as a developer in PRODUCT MANAGEMENT TOOLKIT,
                                                    helps to create and maintain various insurance carrier activities which is
                                                    developed using JSF, Drools and MySQL Database.
                                                </p>
                                            </li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                            <div className='r-box'>
                                <div className='head1'>
                                    <label>INTERNSHIP</label>
                                </div>
                                <div className='content1'>
                                    <label className='r-list'>
                                        <ul>
                                            <li>
                                                <p><b>Software Engineer Intern, Solartis</b> [January 2020 - March 2020]</p>
                                                <p>[Solartis Technology Services Pvt Ltd, Chennai, India]</p>
                                                <p>Insurance Basics and Insurance Flow</p>
                                                <p>Developed a web application for an event insurance project using JSF, Drools and MySQL.</p>
                                            </li>
                                            <br/>
                                            <li>
                                                <p><b>Web Developement Intern, EggHeads</b> [July 2019 - December 2019]</p>
                                                <p>[EggHeads, Chennai, India]</p>
                                                <p>Education Administration Programs</p>
                                                <p>Collaborated on front-end and back-end aspects, optimizing user experience. Built responsive web pages, honed problem-solving skills in an agile startup environment. Enhanced aesthetics through close work with the design team.</p>
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