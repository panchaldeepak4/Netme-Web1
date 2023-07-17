import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/form2.css'

const Form2 = () => {
  return (
    <>
    <Header />
    
    <div className='form_pic_con'>
        <div className='form2_pic'>
            <p id='fpt1'>WELCOME TO THE PARTNER</p>
            <p id='fpt2'>REGISTRATION FORM</p>
        </div>
    </div>

    
    <div className='choose_pkg'>
    <p>Choose a package </p>
    </div>

    <div className='main_con'>
        <div className='txt_pic'>
            <img src='Images/logo.png' alt='missing'></img>
            <div className='list'>
                <div className='display'>
            <li>Guaranteed place on our map</li>
            {/* <img src='Images/icon i.png'></img> */}
            </div>
            <li>Preferred representation</li>
            <li>Expand your visibility</li>
            <li>Stamp card advantage</li>
            <li>In app advertising</li>
            <li>Personalise your profile</li>
            <li>Send push notifications</li>
            </div>
        </div>

        <div className='maincards_div'>
            <div className='cards_div'>
            <div className='card1'>
                <p>Starter</p>
                <img src='Images/14,99.png' alt='missing' id='ofnn'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/dash.png' className='dash' ></img>
                <img src='Images/dash.png' className='dash'></img>
                <img src='Images/dash.png' className='dash'></img>
                <button className='bttn'>Select</button>
            </div>

            <div className='card2'>
            <p>Business</p>
                <img src='Images/20,99.png' alt='missing' id='tznn'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/dash.png' className='dash'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/dash.png' className='dash'></img>
                <button className='bttn2'>Select</button>
            </div>

            <div className='card3'>
                <p>Enterprise</p>
                <img src='Images/49,99.png' alt='missing' id='fnnn'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <img src='Images/tick.png' className='tick'></img>
                <section className='one_x'>1x/month</section>
                <img src='Images/tick.png' className='tick'></img>
                <section className='one_x'>1x/month</section>
                <button className='bttn3'>Select</button>
            </div>
            </div>

        </div>
    </div>
     <div className='form2_main'>    {/*div to provide padding on both sides */}
    <div className='reg_process'>
    <p>To continue your registration process please select your payment method.</p>
    </div>

    <div className='payment_lane'>
        <div className='klarna'>
            <img src='Images/blankround.png' className='round' alt='missing'></img>
            <p>Klarna</p>
            <img src='Images/klarna.png' className='icon_pic' alt='missing'></img>
        </div>

        <div className='amazon_pay'>
            <img src='Images/blankround.png' className='round' alt='missing'></img>
            <p>Amazon pay</p>
            <img src='Images/amazonpay.png' className='icon_pic' alt='missing'></img>
        </div>
        <div className='paypal'>
            <img src='Images/solidround.png' className='round' alt='missing'></img>
            <p>Paypal</p>
            <img src='Images/paypal.png' className='icon_pic' alt='missing'></img>
        </div>
    </div>
    
    <div className='voucher'>
    <p>Got a voucher?</p>
    </div>

    <div className='enter_voucher'>
        <p>Enter your voucher here</p>
    </div>

    <div className='continue'>
        <button>CONTINUE</button>
    </div>

    </div>

    <div className='f2_ftrmgn'>
    <Footer />
    </div>

    </>
  )
}

export default Form2