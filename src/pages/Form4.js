import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../assets/styles/form4.css";

const Form4 = () => {
  return (
    <>
    <Header />
    <div className='form_pic_con'>
        <div className='form4_pic'>
        <img src='Images/done.png' alt='missing'></img>
        <p className='f4_maint'>Thanks for your interest as a partner!</p>
        <p className='f4_subt1'>We will check your registration as soon as possible,
            once you are verified you</p>
        <p className='f4_subt2'>you will be able to get all the benefits of your chosen package!</p>  
        <div className='ex'>You will be able to get all the benefits from our side.</div>
        <div className='ex'>You will be able to get all the benefits from our side.</div>
        <div className='ex'>You will be able to get all the benefits from our side.</div>
        </div>
    </div>
    
    <div className='f4_ftrmgn'>
    <Footer />
    </div>
    </>
  )
}

export default Form4