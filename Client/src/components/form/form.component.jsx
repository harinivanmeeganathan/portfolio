import React, { useState} from 'react';
// import emailjs from 'emailjs-com';
import axios from 'axios';
import './form.styles.scss';

function Formpage() {
    const initialState = { name: '', email: '', message: ''};
    const [value, setValue] = useState({ ...initialState });

    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value });
    }
    const submitEmail = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/api/mail',{...value});
            console.log(response.data);
            } catch(error) {
                console.error('Error sending an email: ',error);
            }

        
        // axios.get('/api/mail', { ...value }).then(res => console.log(res));
    }
    // function sendEmail(e) {
    //   e.preventDefault();
  
    //   emailjs.sendForm('service_k7m1nip', 'template_oxdttxq', e.target, 'user_DLfMVlMooaPHkOEDI7oh7')
    //     .then((result) => {
    //         console.log(result.text);
    //         console.log(e);
    //     }, (error) => {
    //         console.log(error.text);
   
    //     });

    //     e.target.reset();
    // }
    
return(
<div className = 'form'>

    <form className = 'contact-form' onSubmit = {submitEmail} method = 'post'>
        <div className = 'in-form'>
            <input className = 'input-text' type = 'text' placeholder = 'Name' name = 'name' value = {value.name} onChange={handleChange} required>
            </input> 
            <input className = 'input-text' type = 'email' placeholder = 'Email' name = 'email' value = {value.email} onChange={handleChange} required>
            </input>
            <textarea className = 'input-text' type = 'text' placeholder = 'Message' name = 'message' value = {value.message} onChange={handleChange} required>
            </textarea>
        </div> 
        <button className = 'btn' type = 'submit' value = 'submit' >SEND</button>
    </form>
</div>   
)
};

export default Formpage;