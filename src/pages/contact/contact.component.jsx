import React,{useState} from 'react';
import {RiLinkedinFill} from 'react-icons/ri';
import {FiGithub} from 'react-icons/fi';
import {IoLocationOutline} from 'react-icons/io5';
import {VscMail} from 'react-icons/vsc';
import  {IoShareSocialOutline} from 'react-icons/io5';
import Popup from '../../components/pop-up/pop-up.component';
import FormPage from '../../components/form/form.component';
import ParticlesBackground from '../../components/particles/particles.component';
import './contact.styles.scss';


const Contact = () => {
    const [show,setshow] = useState(true)
    const onShow = () => setshow(!show)
    console.log('popup',show)

   let giturl = 'https://github.com/harinivanmeeganathan';
    let linkedin = 'https://www.linkedin.com/in/harini-vanmeeganathan-87323714b/';
    return(
   <div>     
    <ParticlesBackground/>
    <div className = 'contact-container'>
        <div className = 'contact'>
            <span className = 'lines'></span>
            <span className = 'lines'></span>
            <span className = 'lines'></span>
            <span className = 'lines'></span>
        <h1 className = 'title'>Contact</h1>  
            <div className = 'box-one'>
                    <div className = 'inside'>
                        <IoLocationOutline className = 'icon'/><label>My Location</label>
                        <div className = 'indiv'><label>Chennai, Tamil Nadu, INDIA</label></div>
                    </div>
                        <div className = 'inside'>
                            <IoShareSocialOutline className = 'icon'/><label>Social Account</label>
                            <div className = 'indiv'>
                            <a href = {linkedin}><RiLinkedinFill className = 'link'/></a>  
                            <a href = {giturl}><FiGithub className = 'link'/></a>
                            </div>
                        </div>
                        <div className = 'inside'>
                        <VscMail className = 'icon'/><label>Mail Me</label>  
                        <div className = 'indiv'><label>harinivanmeeganathan@gmail.com</label></div>   
            </div>
        </div>
        <div className = 'box-two'>    
        <h1 className = 'mailme'>Mail me</h1>  
            <div className = 'form-outer' toggle = {onShow}>
                {show ? 
                <FormPage toggle = {onShow}/>
                : 
                <Popup   toggle = {onShow}/> 
                }
            </div> 
        </div>
        </div>

    </div>
</div>
)
};

export default Contact;
