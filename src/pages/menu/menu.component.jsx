import React from 'react';
import {Link} from 'react-router-dom';
import './menu.styles.scss';

const MenuContent = ({closeOverlay}) => (
    <div className = 'menu-container'>
        <div className = 'content-container'>
        <Link className = 'about' to = '/about' onClick = {closeOverlay}>
            <div className = 'content'>ABOUT</div>
        </Link>    
            <div className = 'content'>RESUME</div>
        <Link className = 'about' to = '/certification' onClick = {closeOverlay}>
            <div className = 'content'>CERTIFICATIONS</div>
        </Link>
            <div className = 'content'>CONTACT</div>
        </div>
    </div>
);

export default MenuContent;