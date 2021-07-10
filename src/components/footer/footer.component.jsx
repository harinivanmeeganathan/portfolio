import React from 'react';
import {FcCopyright} from 'react-icons/fc';
import './footer.styles.scss';

const Footer = () => (

    <div className = 'footer-container'>
        <FcCopyright className = 'copyright-icon'/>
        <label className = 'copyright'>2021 Harini Vanmeeganathan</label>
    </div>
);

export default Footer;