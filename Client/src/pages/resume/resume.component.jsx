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
                                <div className='content'><label className='l-list'>Self-motivated, highly passionate and assiduous person looking for an opportunity to work in a challenging organization with a continuous learning and solid background in dynamic environments with three years of professional experience.</label></div>
                            </div>
                            <div className='lbox'>
                                <div className='head'><label>SKILLSET</label></div>
                                <div className='content'>
                                    <label className='l-list'>
                                        <ul>
                                            <li>Databases: MySQL, PostgreSQL, MongoDB</li>
                                            <li>Programming Languages: Python, Java, R, JavaScript</li>
                                            <li>Framework : Spring boot, Amazon EC2</li>
                                            <li>Web Development : MERN stack, HTML5, CSS3, Sass, Redux</li>
                                            <li>Data Visualization Tools: Power BI</li>
                                            <li>Developer Platform : Apigee, Firebase</li>
                                            <li>Unit Testing : Junit5, React Testing Library, Jest, Enzyme</li>
                                            <li>Version control system and code Editor: GitHub, Gitlab, SVN, Eclipse IDE and VS Code </li>
                                            <li>Microsoft Office Suite</li>
                                            <li>Production Environment Tools : New Relic, Splunk</li>
                                            <li>Web Hosting : Heroku and Firebase</li>
                                        </ul>
                                    </label>
                                </div>
                            </div>
                            <div className='lbox'>
                                <div className='head'><label>RESEARCH INTEREST</label></div>
                                <div className='content'>
                                    <label className='l-list'>
                                        <ul>
                                            <li>Data Science</li>
                                            <li>Machine Learning</li>
                                            <li>Artificial Intelligence</li>
                                            <li>Natural Language Processing</li>
                                            <li>Big Data Analytics</li>
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
                                            <li>Quick Learner and Problem Solver</li>
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
                                                <p>Master of Data Science [February 2023 - Present]</p>
                                                <p>[La Trobe University, Melbourne, Australia]</p>
                                                <p>Studying and grasping knowledge of Artificial Intelligence and Statistics with data analysis and data mining exposure</p>
                                            </li>
                                            <li>
                                                <p>Bachelor of Computer Science and Engineering [2016 - 2020]</p>
                                                <p>[Anna University, Chennai, India]</p>
                                                <p>I pursued my gradution in computer science and engineering with overall CGPA 8.53</p>
                                            </li>
                                            <li>
                                                <p>HSC (12<sup>th</sup> Grade) [2015 - 2016]</p>
                                                <p>[Doveton Matriculation Higher Secondary School]</p>
                                                <p>I have completed my 12<sup>th</sup> Grade from State board with overall 88%</p>
                                            </li>
                                            <li>
                                                <p>SSLC (10<sup>th</sup> Grade) [2013 - 2014]</p>
                                                <p>[Doveton Matriculation Higher Secondary School]</p>
                                                <p>I have completed my 10<sup>th</sup> Grade from State board with overall 93%</p>
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
                                                <p>Engineer II - Full Stack Developer [February 2022 - February 2023]</p>
                                                <p>[Verizon Data Services India Private Limited, Chennai, India]</p>
                                                <p>Developed a web application which processed, analyzed, and visualized
                                                    data for Associate Recruiting Bolt-On under HCM customs. Enacted SSO security service on Front-end React application for
                                                    Interview preference application. Analyzed and developed API calls for Token Service and Notification
                                                    Service using Java Spring Boot Framework.
                                                </p>
                                            </li>
                                            <li>
                                                <p>Associate Software Engineer, Solartis [June 2020 - February 2022]</p>
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
                                                <p>Software Developer Intern, Solartis [January 2020 - March 2020]</p>
                                                <p>[Solartis Technology Services Pvt Ltd, Chennai, India]</p>
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