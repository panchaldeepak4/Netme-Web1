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
          <Link to='/' className='link'>The App</Link>
          <Link to='/' className='link'>Blog</Link>
          <Link to='/' className='link'>FAQ</Link>
          <Link to='/' className='link'>About</Link>
          <Link to='/form' className='link1' >Become Partner</Link>
          <button onClick={() => navigate('/form')}>REGISTER NOW</button>
        </div>
      </div>
    </>
  )
}

export default Header