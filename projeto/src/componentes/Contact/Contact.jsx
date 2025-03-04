import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

import React from 'react'

function Contact(){
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send Us a Message<img src={msg_icon} alt="..."/></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos qui sapiente odit vel quisquam placeat praesentium et eveniet nihil. Doloribus quas expedita perspiciatis veniam aliquid, reprehenderit consectetur pariatur quia ipsam.</p>
            <ul>
                <li><img src={mail_icon} alt='...'/> Contact@GreatStack.dev</li>
                <li><img src={phone_icon} alt='...'/>+1 123-456-789</li>
                <li><img src={location_icon} alt='...'/>77 Massachusetts Ave <br/>MA 02139, United States</li>

            </ul>
        </div>

        <div className="contact-col">
            <form action="">
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Insert your name' required/>
                
                <label>Phone Number*</label>
                <input type="tel" name='phone' placeholder='Insert your phone number'/>
            
                <label>Message</label>
                <textarea name="message" row="6" placeholder='Insert your message' required/>

                <button type='submit' className='btn btn-color'>Submit</button>

                </form>
        </div>

    </div>
  )
}

export default Contact;