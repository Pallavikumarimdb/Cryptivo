import React from 'react'
import '../css-files/Home.css'
import Nav from './Nav.jsx'
import imghead from '../assets/img.png'
import arrowdown from '../assets/arrowdown.png'

function Home() {
    return (
        <>
            <Nav />
            <div className='Header-1'>
                <div className='home-1 grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2'>

                    <div className='home-flex1'>
                        <div className='home-text-1'><i>CRYPTIVO</i>: The next <br /> big Web3 digital <br />currency </div>
                        <p className='home-text-2'>Cryptivo is a Web3 cryptocurrency-the first decentralized, <br /> P2P digital currency with zero transaction fees <br /> and instant payments </p>

                        <button className='home-but-1'>Get started with Cryptivo</button>
                        <button className='home-but-2'>But Cryptivo</button>
                    </div>
                    <div className='home-flex2'>
                        <img className="head-img" src={imghead} alt="" />
                    </div>


                    {/* ....................................SECTION 2..................................................... */}

                </div>
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
        </>
    )
}

export default Home
