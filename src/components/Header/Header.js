import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'



function Header() {
  return (
    <div className='header_outer_shell'>
        <div className='logo_shell'>
            <img className='CRL_logo' src={logo} alt=''/>
        </div>
        <div className='navigation'>
            <NavLink to='/'>
            HOME
            </NavLink>

        </div>

    
    </div>
  )
}

export default Header