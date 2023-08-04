import React from 'react';
import './homepage.styles.scss';
import SocialLinks from '../../components/social/social.component';
import homesvg from '../../assests/profile.svg';

const HomePage = () => (

    <div>
        <div className='homepage-container'>
            <div className="profile-container">
                <span >
                    <img alt="home-img" className="profile-image" src={homesvg} />
                </span>
            </div>
            <div className='home-conatiner'>
                <div className='intro-container'>
                    <label className='label'>
                        Greetings! I'm <label className='styling'>Harini Vanmeeganathan Lakshmi</label>, a <label className='styling'>software developer</label> committed to expertise my technical skills with a charismatic attitude.
                    </label>
                </div>
                <div className='intro-container'>
                    <label className='label'>
                        I strive to build a challenging solutions with a creative ideas autonomously.
                    </label>
                </div>
            </div>

        </div>
        <SocialLinks />
    </div>
);

export default HomePage;