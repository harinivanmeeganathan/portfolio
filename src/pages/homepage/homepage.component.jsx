import React from 'react';
import ParticlesBackground from '../../components/particles/particles.component';
import './homepage.styles.scss';
const HomePage = () => (

<div>
    <ParticlesBackground/>
    <div className = 'homepage-container'>
        <div className = 'home-conatiner'>
                <div className = 'intro-container'>
                    <label className = 'label'>
                Greetings! I'm <label className = 'styling'>Harini Vanmeeganathan</label>, a <label className = 'styling'>software developer</label> committed to expertise my technical skills with a charismatic attitude.
                    </label>
            </div>
                <div className = 'intro-container'>
                    <label className = 'label'>
                I strive to build a challenging solutions with a creative ideas autonomously. 
                    </label>
                </div>
            </div>
    </div>
</div>
);

export default HomePage;