import React,{ useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../assets/styles/form3.css'

const Form3 = () => {

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);

    const handleChange1 = () => {
      setIsChecked1(!isChecked1);
    };
    const handleChange2 = () => {
        setIsChecked2(!isChecked2);
      };
    const handleChange3 = () => {
        setIsChecked3(!isChecked3);
      };  

  return (
    <>
    <Header />
    <div className='form_pic_con'>
        <div className='form3_pic'>
            <p className='one_step'>ONE STEP AWAY!</p>
            <p>ONE STEP AWAY!</p>
            <p className='one_step'>ONE STEP AWAY!</p>
        </div>
    </div>

    <div className='form2_main'>    {/*div to provide padding on both sides */}

    <p className='accept'>Pleae accept the following to complete your request:</p>

    <div className='checkbox'>
      <label className='f3_label'>
        <input type="checkbox" className='f3_input' checked={isChecked1} onChange={handleChange1}/><span className='span'>Terms & Conditions</span>
      </label>
      <label className='f3_label'>
        <input type="checkbox" className='f3_input' checked={isChecked2} onChange={handleChange2}/><span className='span'>Partner Agreement</span>
      </label>
      <label className='f3_label'>
        <input type="checkbox" className='f3_input' checked={isChecked3} onChange={handleChange3}/><span className='span'>Voucher Terms & Conditions</span>
      </label>
      {/* <p>Checkbox is {isChecked ? 'checked' : 'unchecked'}</p> */}
    </div>

    <div className='acc_nsubmit'>
        <button>Accept and Submit</button>
    </div>

    <div className='cancel'>
        <button>Cancel</button>
    </div>
    
    </div>
    <div className='f3_ftrmgn'>
    <Footer />
    </div>


    
    </>
  )
}

export default Form3