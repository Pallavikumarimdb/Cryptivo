import React from 'react';
import '../css-files/Home.css';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

import imghead from '../assets/img.png';
import img2 from '../assets/img3.1.png';
import arrowdown from '../assets/arrowdown.png';
import img3 from '../assets/img6.1.png';

function Home() {
    return (
        <>
            {/* <Nav /> */}
            <div className='Header-1'>
            <Nav />
                <div className='home-1 grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>

                    <div className='home-flex1'>
                        <div className='home-text-1'><i>CRYPTIVO</i>: The next <br /> big Web3 digital <br />currency </div>
                        <p className='home-text-2'>Cryptivo is a Web3 cryptocurrency-the one of the decentralized, <br /> P2P digital currency with zero transaction fees <br /> and instant payments </p>

                        <button className='home-but-1'>Get started with Cryptivo</button>
                        <button className='home-but-2'>Buy Cryptivo</button>
                    </div>
                    <div className='home-flex2'>
                        <img className="head-img" src={imghead} alt="" />
                    </div>
                </div>

                {/* ....................................SECTION 1.2..................................................... */}


                <div className='home-2'>
                    <div className='home2-arrow'>
                        <img className='home2-arrow-img' src={arrowdown} alt="" />
                    </div>

                    <div className='count-main grid grid-cols-2 sm:grid-cols-2  lg:grid-cols-4'>
                        <div className='cn count0'>
                            <div className='inner-count1'>
                                %XCR Staked
                            </div >
                            <p>90.4%</p>
                        </div>

                        <div className='cn count1'>
                            <div className='inner-count1'>
                                Treasure Balance
                            </div >
                            <p>$801,023,034</p>
                        </div>

                        <div className='cn count2'>
                            <div className='inner-count1'>
                                Current APY
                            </div>
                            <p>7,366%</p>
                        </div>
                        <div className='cn count3'>
                            <div className='inner-count1'>
                                Total Value Locked
                            </div>
                            <p>$9   01,023,034</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ........................................ SECTION 2 ..................................................... */}
            <div className='section2'>

                <div className='secttion2-inner grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>

                    <div className='section2-flex1'>
                        <img className="sec2-img" src={img2} alt="" />
                    </div>

                    <div className='section2-flex2'>
                        <div className='section2-text-1'>Cryptivo is the  Web3 <br />digital currency with a <br />decentralized blockchain.</div>
                        <p className='section2-text-2'>Cryptivo is one of the Web3 digital currency with a decentralized blockchain, allowing instant global payments with low transaction fees. It ensures that everyone has access to financial services and eliminates the need for bank accounts, striving for a world-wide cashless society. </p>

                        <button className='section2-but-1'>Get started with Cryptivo</button>

                    </div>
                </div>

            </div>

            {/* ........................................ SECTION 3 ..................................................... */}
            <div className='section3'>

                <div className='sec3-head'>
                    <h1>Sustainable Staking APY</h1>
                </div>
                <div className='sec3-text'>
                    <p>Cryptivo rewards coin stakes with compounding interest, increasing XCR holdings over time.</p>
                </div>
                {/* <button className='home-but-2'>Take a look</button> */}

            </div>

            {/* ........................................ SECTION 4 ..................................................... */}
            <div className='section2 section4'>

                <div className='secttion2-inner grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>

                    <div className='section2-flex1'>
                        <img className="sec3-img" src={img3} alt="" />
                    </div>

                    <div className='section2-flex2'>
                        <div className='section2-text-1'>Cryptivo and the blockchain</div>
                        <p className='section2-text-2'>Cryptivo is the next currency of the Internet. Cryptivo's blockchain is a decentralized, open- source, public good that anyone can rely on. It's low-cost, fast, accessible anywhere in the world, and available to anyone. It's a place for Web3 applications to run in full decentralization.</p>

                        <button className='section2-but-1'>Get started with Cryptivo</button>

                    </div>
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default Home
