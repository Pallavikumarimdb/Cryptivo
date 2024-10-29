import React from 'react';
import Nav from '../Nav.jsx'
import '../../../src/css-files/SubComponents-css/HowItWorks.css';
import imgsearch1 from '../../../src/assets/search5.jpeg'
import finanace1 from '../../../src/assets/finanace3.jpg'
import Footer from '../Footer.jsx';

function HowItWoorks() {
    return (
        <div className='howwork'>
            <div className='HowItWoorks'>
                <Nav />

                <div className='HowItWoorks-1'>
                    <h1>How Does Cryptivo Works?</h1>
                </div>

                <div className='HowItWoorks-flex grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                    <div className='HowItWoorks-flex1'>

                        <div className='HowItWoorks-flex1-text-1'>The basics for a new user  </div>
                        <p className='HowItWoorks-flex1-text-2'>As a new user, you can get started with Cryptivo without understanding the technical details. Once you've installed an Cryptivo wallet on your computer or mobile, it will generate your first Cryptivo address. You can just create more whenever you need one!</p>

                        <button className='HowItWoorks-flex1-but-2'>Learn More</button>
                    </div>

                    <div className='HowItWoorks-flex2'>
                    <img className="HowItWoorks-flex2-img" src={imgsearch1} alt="" />
                    </div>
                </div>
            </div>



            <div className='HowItWoorks-flexmain2 grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                    <div className='HowItWoorks-sec2-flex1'>

                    <img className="HowItWoorks-sec2-flex2-img" src={finanace1} alt="" />
                    </div>

                    <div className='HowItWoorks-sec2-flex2'>
                    <div className='HowItWoorks-sec2-flex1-text-1'>Make transactions smarter and faster</div>
                        <p className='HowItWoorks-sec2-flex1-text-2'>Learn how Cryptivo's Web3 technology has helped make it the first company to convert digital transaction data into exchangeable digital coins, paving the way for much more efficient systems across every aspect of the supply chain.</p>
                        <button className='HowItWoorks-sec2-flex1-but-2'>Read Out Whitepaper</button>
                    </div>
                </div>
                <Footer/>   
        </div>
    )
}

export default HowItWoorks;