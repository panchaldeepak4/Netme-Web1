import React from 'react'
//import './home2.css'
import '../assets/styles/home2.css'

const Home2 = () => {
  return (
    <>
    <div className='main_text1'>YOUR BENEFITS FROM NETME</div>

<div className='box_row1'>
    <div className='box'>
        <div className='box_pic'>
        <img src='Images/Group1.png'></img>
        </div>
        <section className='box_heading'>Attract new customers</section>
        <p>Connect with local users who want face-</p>
        <p className='box_text'>to-face meetings,bringing in fresh </p>
        <p className='box_text'>customers to your business.</p>
    </div>

    <div className='box_mid'>
    <div className='box_pic'>
        <img src='Images/Group2.png'></img>
        </div>
        <section className='box_heading'>Passive marketing</section>
        <p>Gain ongoing exposure on a social</p>
        <p className='box_text'>platform, allowing your business to </p>
        <p className='box_text'>remain visible without constant</p>
        <p className='box_text'>advertising efforts.</p>
    </div>

    <div className='box'>
    <div className='box_pic'>
        <img src='Images/Group3.png'></img>
        </div>
        <section className='box_heading'>Increase foot traffic</section>
        <p>Engage with NETME users interested in</p>
        <p className='box_text'>meeting at your location, driving more</p>
        <p className='box_text'>visitors to your establishment.</p>
    </div>
</div>

<div className='box_row2'>

    <div className='box21'>
    <div className='box_pic'>
        <img src='Images/Group4.png'></img>
        </div>
        <section className='box_heading'>Direct customer interaction</section>
        <p>Communicate directly with users who</p>
        <p className='box_text'>want to meet at your place, creating</p>
        <p className='box_text'>personal connections.</p>
    </div>

    <div className='box22'>
    <div className='box_pic'>
        <img src='Images/Group5.png'></img>
        </div>
        <section className='box_heading'>Generate returning customers</section>
        <p>Connect your business with local users</p>
        <p className='box_text'>interested in face-to-face meetings.</p>
    </div>
</div>
    </>
  )
}

export default Home2