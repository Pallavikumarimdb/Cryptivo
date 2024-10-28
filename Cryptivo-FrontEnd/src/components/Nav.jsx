import React from 'react'
import '../css-files/Nav.css'
import logo1 from '../assets/logo1.png'

function Nav() {
    return (
        <>
            <div className='nav-1'>
                <div className='header nav-desc'>
                    <a href="#" className="nav-logoanc " aria-current="page"><img className="nav-logo" src={logo1} alt="" /></a>
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul className="menu nav-desc-text">
                      <li><a href="#" className=" nav-text" aria-current="page">How it works</a></li>
                      <li><a href="#" className=" nav-text" aria-current="page">How to use</a></li>
                      <li><a href="#" className=" nav-text" aria-current="page">Blog</a></li>
                      <li><a href="#" className=" nav-text" aria-current="page">About us</a></li>
                      <li><a href="#" className=" nav-text" aria-current="page">Contact</a></li>
                      {/* <div className='nav-button'>
                        <button className='nav-button1'>Join Us</button>
                    </div> */}
                    </ul>
                    <div className='nav-button'>
                        <button className='nav-button1'>Join Us</button>
                    </div>
                </div>
            </div>





        </>
    )
}

export default Nav
