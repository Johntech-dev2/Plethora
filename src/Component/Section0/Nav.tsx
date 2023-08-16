import React from 'react'
import './Nav.css'
function Nav() {
  return (
      <div className='nav'>
          <div className='nav-logo'>
              <img src='logo.png' alt='logo' />
          </div>
          <div className="nav-link">
            <a href='#' className='nav-text'>Apartment</a>
            <a href='#' className='nav-text'>Locations</a>
            <a href='#' className='nav-text'>Aboutus</a>
            </div>
          </div>
  )
}

export default Nav
