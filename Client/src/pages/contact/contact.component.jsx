import React, { useState } from 'react';
import Popup from '../../components/pop-up/pop-up.component';
import FormPage from '../../components/form/form.component';
import SocialLinks from '../../components/social/social.component';
import './contact.styles.scss';


const Contact = () => {
    const [show, setshow] = useState(true)
    const onShow = () => setshow(!show)
    console.log('popup', show)
    return (
        <div>
            <div className='contact-container'>
            <h1 className='title'>Contact</h1>
                <div className='contact'>
                    <div className='box-two'>
                        <h1 className='mailme'>Mail me</h1>
                        <div className='form-outer' toggle={onShow}>
                            {show ?
                                <FormPage toggle={onShow} />
                                :
                                <Popup toggle={onShow} />
                            }
                        </div>
                    </div>
                </div>

            </div>
            <SocialLinks/>
            </div>
    )
};

export default Contact;
