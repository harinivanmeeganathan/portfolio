import React from 'react';
import './overlay.styles.scss';

import MenuContent from '../../pages/menu/menu.component';

const Overlay = () => {
    return(
        <div id = 'overlay' className = 'overlay-container overlay-content'>
          <MenuContent/>             
        </div>
        )
  
}

export default Overlay;