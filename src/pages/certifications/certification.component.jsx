import React from 'react';
import ParticlesBackground from '../../components/particles/particles.component';
import Tilt from 'react-tilt'
import './certification.styles.scss';

class Certify extends React.Component {
render(){
        return(
<div>
    <ParticlesBackground/>
    <div className = 'cetification-conatiner'>
    <h1 className = 'certify'>CERTIFICATIONS</h1>
        <div className = 'certify-container'>
        
            <div className = 'card-container'>
            <Tilt options =  {{max:25,speed: 400,glare:true,"max-glare" : 1}}>
                <div className = 'card'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className = 'content'>
                    
                        <h3>Software Developer Intern, Solartis</h3>
                        <p>Completed 3 months Internship</p>
                        <button>@SOLARTIS</button>
                    </div>
                </div>
            </Tilt>
            <Tilt options =  {{max:25,speed: 400,glare:true,"max-glare" : 1}}>
                <div className = 'card'>
                <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className = 'content'>
                    
                        <h3>Complete React Developer in 2021(w/Redux,Hooks,GraphQL)</h3>
                        <p>Completed 40 hours online course by Andrei Neagoie and Yihua Zhang</p>
                        <button>@UDEMY</button>
                    </div>
                </div>
            </Tilt>    
            <Tilt options =  {{max:25,speed: 400,glare:true,"max-glare" : 1}}>  
                <div className = 'card'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className = 'content'>
                    
                        <h3>Advance Java</h3>
                        <p>Completed 40 hours course Offline</p>
                        <button>@SILICON SOFTWARE</button>
                    </div>
                </div>
            </Tilt>
            <Tilt options =  {{max:25,speed: 400,glare:true,"max-glare" : 1}}>  
                <div className = 'card'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <div className = 'content'>
                    
                        <h3>Core Java</h3>
                        <p>Completed CORE JAVA as a part of ORACLE Workforce Development Program at Eyeopen Technologies</p>
                        <button>@EYEOPEN TECHNOLOGIES</button>
                    </div>
                </div>
            </Tilt>

            </div>

        </div>


    </div>    
</div>
    );
}
}

export default Certify;