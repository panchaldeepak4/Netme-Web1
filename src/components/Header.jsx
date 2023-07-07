import React from 'react'
import '../assets/styles/header.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className='header'>
        <div className='pic'>
          <img src="Images/logo.png" alt="missing" ></img>
        </div>

        <div className='menu'>
          <Link to='/' >The App</Link>
          <Link to='/' >Blog</Link>
          <Link to='/' >FAQ</Link>
          <Link to='/' >About</Link>
          <Link to='/form' className='link' ><u>Become Partner</u></Link>
          <button onClick={() => navigate('/form')}>REGISTER NOW</button>
        </div>
      </div>
    </>
  )
}

export default Header