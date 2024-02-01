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
                                <div className='content'><label className='l-list'>Self-motivated, highly passionate and hardworker looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organisation.</label></div>
                            </div>
                            <div className='lbox'>
                                <div className='head'><label>SKILLSET</label></div>
                                <div className='content'>
                                    <label className='l-list'>
                                        <ul>
                                            <li>Skilled in Web Development: HTML5, CSS3, SCSS,
                                                JavaScript, NodeJS, ExpressJS, ReactJS</li>
                                            <li>Programming languages: C, C++, Java, SQL</li>
                                            <li>Version control system: Github, Gitlab, SVN</li>
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
                            <label className='name-value'>Harini Vanmeeganathan</label>
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
                                                <p>MASTER OF DATA SCIENCE [2023 - 2025]</p>
                                                <p>[La Trobe University]</p>
                                                <p>•Specialization in Artificial Intelligence analytics<br/>
                                                •Courses Taken: Artificial Intelligence, Data Mining, Machine Learning, Natural Language Processing.
                                                </p>
                                            </li>
                                            <li>
                                                <p>BACHELOR OF COMPUTER SCIENCE AND ENGINEERING [2016 - 2020]</p>
                                                <p>[Anna University, Chennai, India]</p>
                                                <p>Graduated four-year study with a First-class distinction and developed a working module for the Project work subject in the final semester.</p>
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
                                                <p>Engineer II - Full Stack Developer, Verizon [February 2022 - February 2023]</p>
                                                <p>[Verizon Global Services, India]</p>
                                                <p>Developed a web application that processed, analyzed, and visualized data for Associate Recruiting Bolt-On under HCM customs. Enacted SSO security service on the front-end React application for Human Capital Management Custom Bolt-on application. Analyzed and developed API calls for token service and notification service using Java Spring Boot Framework and PostgreSQL.
                                                </p>
                                            </li>
                                            <br/>
                                            <li>
                                                <p>Associate Software Engineer, Solartis [June 2020 - February 2022]</p>
                                                <p>[Solartis Technology Services Pvt Ltd, India]</p>
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