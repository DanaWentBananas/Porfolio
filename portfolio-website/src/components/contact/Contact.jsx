import React from 'react';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs';
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1sgu8op', 'template_qf77c1s', form.current, '_QZlFnLgx6_8MZeVz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

    return (
        <section id='contact'>
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact-container">
                
                <div className="contact-options">

                    <article className="contact-option">
                        <MdOutlineEmail className='contact-icon'/>
                        <h4>Email</h4>
                        <h5>dana3amjad@gmail.com</h5>
                        <a href="mailto:dana3amjad@gmail.com">Email me</a>
                    </article>

                    <article className="contact-option">
                        <BsLinkedin className='contact-icon'/>
                        <h4>LinkedIn</h4>
                        <a href="https://www.linkedin.com/in/danaalsani/" target='_blank'>Connect with me</a>
                    </article>

                    <article className="contact-option">
                        <BsWhatsapp className='contact-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+971524926900</h5>
                        <a href="https://api.whatsapp.com/send?phone+971524926900" target='_blank'>Text me</a>
                    </article>

                </div>
                
                <div>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required />
                        <input type="email" name='email' placeholder='Your Email' required />
                        <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>

            </div>
        </section>  
    )
}

export default Contact
