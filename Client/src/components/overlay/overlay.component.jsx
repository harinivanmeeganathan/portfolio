import React from 'react';
import './overlay.styles.scss';

import MenuContent from '../../pages/menu/menu.component';

const Overlay = ({closeOverlay}) => {
    return(
        <div id = 'overlay' className = 'overlay-container overlay-content'>
          <MenuContent  closeOverlay = {closeOverlay}/>             
        </div>
        )
  
}

export default Overlay;