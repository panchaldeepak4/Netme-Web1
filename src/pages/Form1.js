import React,{ useState } from 'react'
import { Formik, Form, Field } from 'formik';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upload1 from '../components/Upload1';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import './form.css'
import '../assets/styles/form1.css'

const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];


const Form1 = () => {

  const navigate = useNavigate();
  
  const handleSubmit = async (values) => {
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmUwNzgzY2FiMDE3MDVlZDgxZGJmNSIsIm5hbWUiOiJkZWVwYWsiLCJlbWFpbCI6InRlc3QyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJE9zSTJrVWsxMWhxWTF6NGg2akxDWU82c3Rzc1p6RmpHNDVrbzNGRDdtOEdLendVQk1IaWdhIiwiZGlzcGxheXBpYyI6Imh0dHBzOi8vaWNvbi1saWJyYXJ5LmNvbS9pbWFnZXMvYW5vbnltb3VzLWF2YXRhci1pY29uL2Fub255bW91cy1hdmF0YXItaWNvbi0yNS5qcGciLCJmb2xsb3dlcnMiOltdLCJmb2xsb3dpbmciOltdLCJ1c2VycG9zdHMiOltdLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTI0VDEyOjQ4OjAzLjMzOFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA1LTI0VDEyOjQ4OjAzLjMzOFoiLCJfX3YiOjB9LCJpYXQiOjE2ODQ5MzMwNDcsImV4cCI6MTY4NDkzNjY0N30.Hy2P_l3x4rWY6u14EjGBsN-IDTVwJMCVzket0C0t5Pc';
      const response = await axios.post('https://netme.onrender.com/partner/auth/register', values)
      
      console.log('Data successfully sent to the API:', response.data);
      navigate('/form2')
    } catch (error) {
      console.error('Error sending data to the API:', error);
      console.log(values)
      navigate('/form2');
    }
  };
 
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

        <Formik  
        initialValues={{locationName: " ",dropdownValue: " ",companyTaxno: " ",mobile: " ",address:" " ,city: " ",
      email: " ",phone:" ",fullName:" ",eMail: " ",lastName: " ",mobileNo: " ",jobPosition: " "}}

    onSubmit={handleSubmit}>
    <Form>
        <p className='loc'>Location</p>
        <div className='location'>
            <div className='location_a'>
        <label className='label'>Location name<sup>*</sup></label><br></br>
        <Field name='locationName' type='text' className='form_field' placeholder='Enter Name'></Field><br></br>
        <label className='label'>Category<sup>*</sup></label><br></br>
        <Field name='dropdownValue' as='select' className='form_field' placeholder='Enter category'>
        <option value="">Select an option</option>
        {dropdownOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
            </Field><br></br>
        <label className='label'>Company tax no<sup>*</sup></label><br></br>
        <Field name='companyTaxno' type='number' className='form_field' placeholder='Enter company tax no'></Field><br></br>
        <label className='label'>Mobile number<sup>*</sup></label><br></br>
        <Field name='mobile' type='number' className='form_field' placeholder='Enter mobile number'></Field><br></br>
        </div>

        <div className='location_b'>
        <label className='label'>Address</label><br></br>
        <Field name='address' type='text' className='form_field' placeholder='Enter address'></Field><br></br>
        <label className='label'>City<sup>*</sup></label><br></br>
        <Field name='city' type='text' className='form_field' placeholder='Enter city'></Field><br></br>
        <label className='label'>E-mail<sup>*</sup></label><br></br>
        <Field name='email' type='email' className='form_field' placeholder='Enter email'></Field><br></br>
        <label className='label'>Phone number<sup>*</sup></label><br></br>
        <Field name='phone' type='number' className='form_field' placeholder='Enter phone'></Field><br></br>
        </div>
        </div>

        <p className='l_r'>Legal Representative</p>
        <div className='legal'>
         <div className='legal_a'>
         <label className='label'>Full name<sup>*</sup></label><br></br>
        <Field name='fullName' type='text' className='form_field' placeholder='Enter Name'></Field><br></br>
        <label className='label'>E-mail<sup>*</sup></label><br></br>
        <Field name='eMail' type='email' className='form_field' placeholder='Enter email'></Field><br></br>
         </div>

         <div className='legal_b'>
         <label className='label'>Last name<sup>*</sup></label><br></br>
        <Field name='lastName' type='text' className='form_field' placeholder='Last Name'></Field><br></br>
        <label className='label'>Mobile number<sup>*</sup></label><br></br>
        <Field name='mobileNo' type='number' className='form_field' placeholder='Mobile number'></Field><br></br>
         </div>
         </div>
         <div className='job_pos'>
        <label className='label'>Job position<sup>*</sup></label><br></br>
        <Field name='jobPosition' type='text' className='form_field' placeholder='Job position'></Field><br></br>
        </div>


      
        <p className='im'>Images</p>
        <div className='upload'>
        <Upload1 />
        </div>



        <p id='pic_txt1'>You must at least upload one image to continue the registration process*</p>
        <p id='pic_txt2'>The image format should be XY</p>
       <div className='form_btn'>
        {/* <button onClick={() => navigate('/form2')}>NEXT</button> */}
        <button type='submit'>NEXT</button>
        </div>
    </Form>
    </Formik>
    </div>
    </div>

   <div className='f1_ftrmgn'> 
    <Footer />
    </div>
    </>
  )
}

export default Form1