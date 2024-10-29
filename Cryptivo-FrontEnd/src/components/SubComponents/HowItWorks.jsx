import React from 'react';
import Nav from '../Nav.jsx'
import '../../../src/css-files/SubComponents-css/HowItWorks.css';
import imgsearch1 from '../../../src/assets/search5.jpeg'


function HowItWoorks() {
    return (
        <>
            <div className='HowItWoorks'>
                <Nav />

                <div className='HowItWoorks-1'>
                    <h1>How Does Cryptivo Works?</h1>
                </div>

                <div className='HowItWoorks-flex grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                    <div className='HowItWoorks-flex1'>

                        <div className='HowItWoorks-flex1-text-1'>The basics for a new user  </div>
                        <p className='HowItWoorks-flex1-text-2'>As a new user, you can get started with X Coin without understanding the technical details. Once you've installed an X Coin wallet on your computer or mobile, it will generate your first X Coin address. You can just create more whenever you need one!</p>

                        <button className='HowItWoorks-flex1-but-2'>Buy Cryptivo</button>
                    </div>

                    <div className='HowItWoorks-flex2'>
                    <img className="HowItWoorks-flex2-img" src={imgsearch1} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowItWoorks;