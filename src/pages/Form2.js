import React from 'react'
import Header from '../components/Header'
import '../assets/styles/form2.css'

const Form2 = () => {
  return (
    <>
    <Header />
    <div className='form_pic_con'>
        <div className='form_pic'>
            <p id='fpt1'>WELCOME TO THE PARTNER</p>
            <p id='fpt2'>REGISTRATION FORM</p>
        </div>
    </div>
    <div className='choose_pkg'>
    <p>Choose a package </p>
    </div>

    <div className='main_con'>
        <div className='txt_pic'>
            <img src='Images/logo.png'></img>
            <div className='list'>
            <li>Guaranteed place on our map</li>
            <li>Preferred representation</li>
            <li>Expand your visibility</li>
            <li>Stamp card advantage</li>
            <li>In app advertising</li>
            <li>Personalise your profile</li>
            <li>Send push notifications</li>
            </div>
        </div>

        <div className='cards_div'>
            <div className='card1'>
                <p>Starter</p>
                <p>14,99<span>/month</span></p>
                <button>Select</button>
            </div>

            <div className='card2'>
            <p>Business</p>
                <p>20,99<span>/month</span></p>
                <button>Select</button>
            </div>

            <div className='card3'>
                <p>Enterprise</p>
                <p>49,99<span>/month</span></p>
                <button>Select</button>
            </div>

        </div>
    </div>
    <div className='reg_process'>
    <p>To continue your registration process please select your payment method.</p>
    </div>

    <div className='payment_lane'>
        <div className='klarna'>
            <img src='Images/blankround.png'></img>
            <p>Klarna</p>
            <img src='Images/klarna.png'></img>
        </div>

        <div className='amazon_pay'>
            <img src='Images/blankround.png'></img>
            <p>Amazon pay</p>
            <img src='Images/amazonpay.png'></img>
        </div>
        <div className='paypal'>
            <img src='Images/solidround.png'></img>
            <p>Paypal</p>
            <img src='Images/paypal.png'></img>
        </div>
    </div>
    
    <div className='voucher'>
    <p>Got a voucher?</p>
    </div>
    </>
  )
}

export default Form2