import React, { Component } from 'react';
import { particleJSON } from '../../models/particles';
import Particles from 'react-particles-js';
import './particles.styles.scss';
class ParticlesBackground extends Component {
    render() {
        return (
            <Particles className='particle-container'
                params={{ ...particleJSON }} />
        )
    }
}

export default ParticlesBackground;
