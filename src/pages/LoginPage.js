import React , { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';
import loginbackgroundimg from "../images/backgroundimg.avif";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function LoginPage() {


  return (
    <div className='login-back'>

      <div className='inner-box'>
      <h1 className='heading'>Login</h1>
            <input className='log-inputBox' type='text'  placeholder='enter your email'/>
            <input className='log-inputBox' type='password'   placeholder='enter your password'/>
          <div className='btn'>
            <button>log-in</button>
          </div>
          <hr></hr>
          <p className='p-or'>or</p>

          <div className='browser-login'>
            <idv><GoogleIcon/></idv>
            <idv><FacebookIcon/></idv>
            <idv><TwitterIcon/></idv>
          </div>
          <p>
              Don't have an Account?{''}
              <span >
                <Link to="/singup" className='link-singup'>SingUp</Link>
              </span>
            </p>
      </div>
    </div>
  )
}
