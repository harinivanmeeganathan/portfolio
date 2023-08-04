import React from 'react';
import {FcCopyright} from 'react-icons/fc';
import './footer.styles.scss';

const Footer = () => (

    <div className = 'footer-container'>
        <label className = 'copyright'>Copyright</label>
        <FcCopyright className = 'copyright-icon'/>
        <label className = 'copyright'>2021 - 2023 Harini Vanmeeganathan Lakshmi. All rights reserved</label>
    </div>
);

export default Footer;