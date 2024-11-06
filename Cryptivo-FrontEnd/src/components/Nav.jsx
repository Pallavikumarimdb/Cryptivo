import React from 'react'
import '../css-files/Nav.css'
import logo1 from '../assets/logo1.png'
import { NavLink } from "react-router-dom";
// import HowItWoorks from './SubComponents/HowItWorks.jsx'

function Nav() {
    return (
        <>
            <div className='nav-1'>
                <div className='header nav-desc'>
                    <NavLink to="/" className="nav-logoanc " aria-current="page"><img className="nav-logo" src={logo1} alt="" /></NavLink>
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul className="menu nav-desc-text">
                      <li><NavLink to="/HowItWorks" className=" nav-text" aria-current="page">How it works</NavLink></li>
                      <li><NavLink to="/HowToUse" className=" nav-text" aria-current="page">How to use</NavLink></li>
                      <li><NavLink to="#" className=" nav-text" aria-current="page">Blog</NavLink></li>
                      <li><NavLink to="#" className=" nav-text" aria-current="page">About us</NavLink></li>
                      <li><NavLink to="#" className=" nav-text" aria-current="page">Contact</NavLink></li>
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
