import React from 'react'
import { Formik, Form, Field } from 'formik';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upload1 from '../components/Upload1';
//import './form.css'
import '../assets/styles/form.css'




const Form1 = () => {
  return (
    <>
    
    <Header />

    <div className='form_pic_con'>
        <div className='form_pic'>
            <p id='fpt1'>WELCOME TO THE PARTNER</p>
            <p id='fpt2'>REGISTRATION FORM</p>
            <section>Please fill in the form below</section>
        </div>
    </div>

    <div className='main_form'>
        <div className='sub_form'>
        <Formik >
    <Form>
        <p className='loc'>Location</p>
        <div className='location'>
            <div className='location_a'>
        <label className='label'>Location name<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter Name'></Field><br></br>
        <label className='label'>Category<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter category'></Field><br></br>
        <label className='label'>Company tax no<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter category'></Field><br></br>
        <label className='label'>Mobile number<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter category'></Field><br></br>
        </div>

        <div className='location_b'>
        <label className='label'>Address</label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter address'></Field><br></br>
        <label className='label'>City<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter city'></Field><br></br>
        <label className='label'>E-mail<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter email'></Field><br></br>
        <label className='label'>Phone number<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter phone'></Field><br></br>
        </div>
        </div>

        <p className='l_r'>Legal Representative</p>
        <div className='legal'>
         <div className='legal_a'>
         <label className='label'>Full name<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter Name'></Field><br></br>
        <label className='label'>E-mail<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Enter email'></Field><br></br>
         </div>

         <div className='legal_b'>
         <label className='label'>Last name<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Last Name'></Field><br></br>
        <label className='label'>Mobile number<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Mobile number'></Field><br></br>
         </div>
         </div>
         <div className='job_pos'>
        <label className='label'>Job position<sup>*</sup></label><br></br>
        <Field name='name' type='text' className='form_field' placeholder='Job position'></Field><br></br>
        </div>


        {/* <p className='im'>Images</p>
        <div className='upload_pic_con'>
        <div className='upload_pic'>
            Please upload your image first
        </div>
        </div> */}
        <p className='im'>Images</p>
        <Upload1 />



        <p id='pic_txt1'>You must at least upload one image to continue the registration process*</p>
        <p id='pic_txt2'>The image format should be XY</p>
       <div className='form_btn'>
        <button>NEXT</button>
        </div>
    </Form>
    </Formik>
    </div>
    </div>


    <Footer />
    </>
  )
}

export default Form1