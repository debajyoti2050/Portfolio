import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_or70ahj', 'template_y74zwyd', form.current, 'lldKT-gPDpm9tZozS')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <section id='contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>

              <h4>Email</h4>
              <h5>debajyoti0007@gmail.com</h5>
              <a href="mailto:debajyoti0007@gmail.com" target="_blank">Send a message</a>


            </article>



            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>

              <h4>Messenger</h4>
              <h5>Debajyoti Bhattacharjee</h5>
              <a href="https://m.me/micromaxdebajyoti.bhattacharjee" target="_blank">Send a message</a>
              

            </article>



            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>

              <h4>Whats App</h4>
              <h5>8697812885</h5>
              <a href="https://api.whatsapp.com/send?phone=+918697812885" target="_blank">Send a message</a>
              

            </article>




          </div>




        </div>


        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>


        </form>




      </div>




    </section>
  )
}

export default Contact