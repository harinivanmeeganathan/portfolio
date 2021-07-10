import React from 'react';
import emailjs from 'emailjs-com';
import './form.styles.scss';

function Formpage(toggle) {

    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('service_k7m1nip', 'template_oxdttxq', e.target, 'user_DLfMVlMooaPHkOEDI7oh7')
        .then((result) => {
            console.log(result.text);
            console.log(e);
        }, (error) => {
            console.log(error.text);
   
        });
        e.target.reset();
    }
return(
<div className = 'form'>

    <form className = 'contact-form' onSubmit = {sendEmail} method = 'post'>
        <div className = 'in-form'>
            <input className = 'input-text' type = 'text' placeholder = 'Name' name = 'from_name'>
            </input> 
            <input className = 'input-text' type = 'email' placeholder = 'Email' name = 'email_address'>
            </input>
            <textarea className = 'input-text' type = 'text' placeholder = 'Message' name = 'message'>
            </textarea>
        </div> 
        <button className = 'btn' type = 'submit' value = 'submit' onClick = {toggle}>SEND</button>
    </form>
</div>   
)
};

export default Formpage;