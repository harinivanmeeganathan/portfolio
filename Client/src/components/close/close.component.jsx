import React from 'react';
import {ReactComponent as Close} from '../../assests/close.svg';
import './close.styles.scss';


const CloseIcon = () => {
   
    return(
        <Close className = 'close-button' />
    )
}

export default CloseIcon;