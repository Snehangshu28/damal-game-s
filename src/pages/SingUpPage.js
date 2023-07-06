import React from 'react';
import { Link } from 'react-router-dom';
import '../HomePage.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SingUpPage() {
  return (
    <div className='login-back'>
      <div className='inner-box'>
      <h1 className='heading'>SingUp</h1>
            <input className='log-inputBox' type='text'  placeholder='userName'/>
            <input className='log-inputBox' type='text'  placeholder='enter your email'/>
            <input className='log-inputBox' type='password'   placeholder='enter your password'/>
          <div className='btn'>
            <button>Sing-up</button>
          </div>
          <hr></hr>
          <p className='p-or'>or</p>

          <div className='browser-login'>
            <idv><GoogleIcon/></idv>
            <idv><FacebookIcon/></idv>
            <idv><TwitterIcon/></idv>
          </div>
          <p>
              Already have an Account?{''}
              <span >
                <Link to="/login" className='link-singup'>Login</Link>
              </span>
            </p>
      </div>
    </div>
  )
}
