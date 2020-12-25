import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

    emailjs.sendForm('service_8ijad6o', 'template_nyd3b5e', e.target, 'user_yyfr69rWOfINFVfw54LhO')
      .then((result) => {
          console.log(result.text);
          alert('Thanks a lot')
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }
    
    return (
        <div id="contactMe" className="text-center text-light">
            <h1 className="mt-5 ">CONTACT ME</h1>
            <p className="span mb-5"></p>
            <div className="contact text-center container">
                <form className="contact-form" onSubmit={sendEmail}>
                    <div >
                        <h1>HIRE ME</h1>
                        <hr/>
                        <p>Name</p>
                        <input className='field' type="text" name='name' placeholder="Your Name"/> <br/>
                        <p>Email</p>
                        <input className='field'  type="text" name="email" placeholder="Your Email"/> <br/>
                        <p>Message</p>
                        <textarea className='field' name='message' placeholder="Message"></textarea> <br/>
                        <input className='field'  class="btn btn-light mt-3" type="submit" value="Send" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;