import React from 'react'
import '../assets/styles/footer.css'

const Footer = () => {
  return (
    <div div className='footerContainer'>
    <div className='footer_pic'>
        <img src='Images/logo.png' alt='missing'></img>
    </div>
    <div className='footer_txt'>
        <p>Made with</p>
        <img src='Images/heart.png'></img>
        <p>in Munich</p>
    </div>
    <div className='footer_frame'>
        <img src='Images/Frame 2.png' alt=''></img>
    </div>
    <div className='footer_items'>
        <p>The App</p>
        <p>Blog</p>
        <p>FAQ</p>
        <p>About</p>
        <p>Become Partner</p>
        <p>Ads</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Legal Disclosure</p>
    </div>
    <p>Copyright © 2022. All Rights Reserved</p>
    

    </div>
  )
}

export default Footer