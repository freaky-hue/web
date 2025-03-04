import './About.css'
import about_img from '../../assets/about.png'

import React from 'react'

function About(){
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_img} alt='...'/>

        </div>

        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi facere, nihil consequatur iusto possimus esse earum?
                 Dolor assumenda velit impedit, animi ea odit mollitia nemo laborum eos eaque sunt aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit neque ratione dolor exercitationem, impedit asperiores dolorem sapiente voluptatibus eaque labore recusandae.
                 Iste tenetur, suscipit fugiat id voluptates quam dolor laborum?</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fuga earum incidunt dolores, natus quos magni alias voluptas quam quasi eum dolorum deserunt repudiandae? ~
                Iste voluptatum illo cumque! Expedita, dolorum eaque?</p>
        </div>


    </div>
  )
}

export default About