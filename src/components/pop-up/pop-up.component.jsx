import React from 'react';
import './pop-up.styles.scss';
import {TiTick} from 'react-icons/ti';

const Popup = ({toggle}) => {
    return(
    <div className = 'popcontainer'>
        <div className = 'popup-container'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className = 'pop-icon'>
                <TiTick className = 'tick'/>
            </div>
            <div className = 'pop-title'>
                <label> Mail Sent!</label>   
            </div>
            <div className = 'pop-btn'>
                <button className = 'btn-dismiss' onClick = {toggle}>DISMISS</button>
            </div>
        </div>
    </div>
    )
};

export default Popup;