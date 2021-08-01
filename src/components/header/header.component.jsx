import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assests/logo.svg';
import {ReactComponent as Menu} from '../../assests/menu.svg';
import Overlay from '../overlay/overlay.component';
import CloseIcon from '../close/close.component';
import './header.styles.scss';

const Header = () =>{
    const [changeIcon,setchangeIcon] = useState(false)
    const oniconClick = () => setchangeIcon(!changeIcon)

    console.log('icon',changeIcon)
    return (

    <div className = 'header'>
        <Link className = 'logo-container' to = '/'>
            <Logo className='logo' />
        </Link>
        <div className = 'menu-container' onClick = {oniconClick} >
            {   changeIcon ? 
             <CloseIcon/> : <Menu className='menu'/> }
               
        </div>
            { 
                changeIcon ? <Overlay closeOverlay = {oniconClick} /> : null
            }
    </div>
)}
        

export default Header;