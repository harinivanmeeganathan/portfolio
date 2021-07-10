import React from 'react';
import {Link} from 'react-router-dom';
import './menu.styles.scss';

const MenuContent = ({closeOverlay}) => (
    <div className = 'menu-container'>
        <div className = 'content-container'>
        <Link className = 'about' to = '/about' onClick = {closeOverlay}>
            <div className = 'content'>ABOUT</div>
        </Link>    
        <Link className = 'about' to = '/resume' onClick = {closeOverlay}>
            <div className = 'content'>RESUME</div>
        </Link>
        <Link className = 'about' to = '/certification' onClick = {closeOverlay}>
            <div className = 'content'>CERTIFICATIONS</div>
        </Link>
        <Link className = 'about' to = '/contact' onClick = {closeOverlay}>
            <div className = 'content'>CONTACT</div>
        </Link>
        </div>
    </div>
);

export default MenuContent;