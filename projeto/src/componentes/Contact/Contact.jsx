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
            <h3>Envie-nos uma mensagem<img src={msg_icon} alt="..."/></h3>
            <p>Tem dúvidas ou precisa de mais informações? Estamos aqui para ajudar! Entre em contacto connosco através dos nossos canais de comunicação.</p>
            <ul>
                <li><img src={mail_icon} alt='...'/> geral.porto@cinel.pt</li>
                <li><img src={phone_icon} alt='...'/> 22 536 32 10</li>
                <li><img src={location_icon} alt='...'/> Rua de São Rosendo, 377
                 <br/>4300-478 Porto</li>

            </ul>
        </div>

        <div className="contact-col">
            <form action="">
                <label>Nome</label>
                <input type="text" name='name' placeholder='Insira o seu nome' required/>
                
                <label>Telemóvel</label>
                <input type="tel" name='phone' placeholder='Insira o seu número de telemóvel'required/>
            
                <label>Messagem</label>
                <textarea name="message" row="6" placeholder='Insira a sua mensagem' required/>

                <button type='submit' className='btn btn-color'>Enviar</button>

                </form>
        </div>

    </div>
  )
}

export default Contact;