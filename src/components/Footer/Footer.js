import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'




function Footer() {


  return (
    <div className='footer_outer_shell'>
        <div className='footer_logo'>
            <img src={logo} alt='' />
            <h2>Join Us On The Journey To Put Relationships First!</h2>
            <button className='contact_us_footer_button'>Contact Us</button>
        </div>

        <div className='footer_navigation'>
            <h2>Navigation</h2>
            <ul>
                <li>Relational Learning</li>
                <li>Blog and Podcast</li>
                <li>Offerings</li>
                <li>Contact</li>
                <li>About Us</li>
            </ul>
        </div>


        <div className='footer_contact_info'>
            <h2>Contact Info</h2>
            <ul>
                <li>Dr. George Otero</li>
                <li>505.690.8123</li>
                <li>info@relationalearning.com</li>
            </ul>
        </div>



    </div>
  )
}

export default Footer