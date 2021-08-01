import React, { Component } from 'react';
import Particles from 'react-particles-js';

class ParticlesBackground extends Component {
    render() {
        return (
            <Particles className = ''
                params={{
                "particles": {
                    "number": {
                        "value": 50
                    },
                    "size": {
                        "value": 3
                    },
                    "nb" : 80
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onresize": {
                            "enable": true,
                            "density_auto": true,
                            "density_area": 400 
                          }
                    }
                }
            }}/>
        )
    }
}

export default ParticlesBackground;
