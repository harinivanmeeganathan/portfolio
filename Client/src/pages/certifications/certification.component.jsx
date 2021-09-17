import React from 'react';
import Tilt from 'react-tilt'
import {Certification} from '../../models/certification';
import './certification.styles.scss';

class Certify extends React.Component {
render() {
return (
    <div>
        <div className='cetification-conatiner'>
            <h1 className='certify'>CERTIFICATIONS</h1>
            <div className='certify-container'>

        <div className='card-container'>
                {Object.keys(Certification).map(dataList => (
            <Tilt options={{ max: 25, speed: 400, glare: true, "max-glare": 1 }}>
            <div className='card'>
                <div className='content'>
                <h3>{Certification[dataList].title}</h3>
                <p>{Certification[dataList].duration}</p>
                <div>{Certification[dataList].place}</div>   
            </div>
            </div>
            </Tilt>
            ))}
        </div>

            </div>


        </div>
    </div>
);
}
}

export default Certify;