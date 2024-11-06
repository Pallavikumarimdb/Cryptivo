import React from 'react';
import '../../../src/css-files/SubComponents-css/HowToUse.css';
import Nav from '../Nav.jsx'
import Footer from '../Footer.jsx';
import line1 from '../../../src/assets/line1.png'
import imgsearch1 from '../../../src/assets/info.jpeg'
import finanace1 from '../../../src/assets/wallet1.png'
import line2 from '../../../src/assets/line2.png'
import img8 from '../../../src/assets/img9.png'
import vid1 from '../../../src/assets/vid2.mp4'
import line3 from '../../../src/assets/line3.png'
import Accordion from './Accordions.jsx'    

function HowToUse() {
    return (
        <div className='howUse'>
            <div className='howToUses'>
                <Nav />

                <div className='howToUses-1'>
                    <h1>How do you use Cryptivo Coin?</h1>
                </div>

                <div className='howToUses-flex grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                    <div className='howToUses-flex1'>

                        <div className="step-indicator">
                            <div className="step-circle">
                                1
                            </div>
                            <div className="step-label">
                                Education
                            </div>
                        </div>

                        <div className='howToUses-flex1-text-1'>Stay Informed</div>
                        <p className='howToUses-flex1-text-2'>Before you begin to use Crypivo, there are several facts you should keep in mind so that you can make the best use of the currency and be secure in your transactions.</p>

                        <button className='howToUses-flex1-but-2'>Learn More</button>
                    </div>

                    <div className='howToUses-flex2'>
                        <img className="howToUses-flex2-img" src={imgsearch1} alt="" />

                    </div>

                </div>

            </div>
            <div className="inline-block content-center items-center" >
            <img className="line-1-sec" src={line1} alt="" />
        </div>
            <div className='howToUses-flexmain2 grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                <div className='howToUses-sec2-flex1'>

                    <img className="howToUses-sec2-flex2-img" src={finanace1} alt="" />
                </div>

                <div className='howToUses-sec2-flex2'>
                    <div className="step-indicator">
                        <div className="sec-cir step-circle">
                            2
                        </div>
                        <div className="sec-cir step-label">
                            Teasury Tools
                        </div>
                    </div>
                    <div className='howToUses-sec2-flex1-text-1'>Choose your wallet</div>
                    <p className='howToUses-sec2-flex1-text-2'>You can choose to install an app on your smartphone or create a wallet only for online payments on your computer. In either case, choosing a web3 wallet is and easy</p>
                    <button className='howToUses-sec2-flex1-but-2'>Choose your wallet</button>
                </div>
            </div>
            <div className="inline-block content-center items-center" >
                <img className="line-2-sec" src={line2} alt="" />
            </div>
            <div className='howToUses-flex grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                <div className='howToUses-flex1'>

                    <div className="step-indicator">
                        <div className="step-circle">
                            3
                        </div>
                        <div className="step-label">
                            Treasury Growth
                        </div>
                    </div>

                    <div className='howToUses-flex1-text-1'>Get Cryptivo</div>
                    <p className='howToUses-flex1-text-2'>You can get Cryptivo by accepting it as a payment for goods and services. There are also several ways you can buy Cryptivo</p>

                    <button className='howToUses-flex3-but-2'>Buy Cryptivo</button>
                </div>

                <div className='howToUses-flex2'>
                    {/* <video autoPlay loop muted className=" howUse-vid-1 object-cover">
                        <source src={vid1} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                     <img className="howUse-img-1 " src={img8} alt="" />

                </div>

            </div>

            <div className="inline-block content-center items-center" >
            <img className="line-3-sec" src={line3} alt="" />
        </div>
            <div className='last-grod howToUses-flexmain2 grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>
                <div className='howToUses-sec2-flex1'>

                        <video autoPlay loop muted className=" howUse-vid-1 object-cover">
                            <source src={vid1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                </div>

                <div className='howToUses-sec2-flex2'>
                    <div className="step-indicator">
                        <div className="sec-cir step-circle">
                            4
                        </div>
                        <div className="sec-cir step-label">
                            Staking Rewards
                        </div>
                    </div>
                    <div className='howToUses-sec2-flex1-text-1'>Spend Cryptivo</div>
                    <p className='howToUses-sec2-flex1-text-2'>There is a growing number of services and merchants accepting Web3 payments all over the world. Use Cryptivo to pay them, and rate your experience to help them gain more visibility.</p>
                    <button className='howToUses-flex3-but-2'>Fing Products</button>
                </div>
            </div>
            <div className="App">
      <h1 className='Accordion-head'>Frequently Asked Question</h1>
      <Accordion title="What is the difference between Web2 and web3?" content="This is the content of section 1." />
      <Accordion title="How do you enhance security" content="This is the content of section 2." />
      <Accordion title="What is decentralized exchange" content="This is the content of section 3." />
    </div>
            <Footer />

        </div>
    )
}

export default HowToUse;