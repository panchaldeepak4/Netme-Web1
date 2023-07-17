import React from 'react'
import '../assets/styles/popup.css'

const Popup = () => {
  return (
    <>
    <div className='pop_main'>
        <div className='imp'>
            <p className='imp_p'>Important!</p>
            <p className='imp_t1'>Please accept the following to</p>
            <p className='imp_t2'>complete your request:</p>
            <div className='pop_btn'>
            <button>GOT IT</button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Popup