import React from 'react'
import "./navbar.css"

export const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='headingTag'>
                <h4 className='heading'>LOGOBAKERY</h4>
            </div>
            <div className='paraTag'>
                <p>Services</p>
                <p>Projects</p>
                <p>About</p>
            </div>
            <div className='buttonTag'>
                <button className='button'>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar