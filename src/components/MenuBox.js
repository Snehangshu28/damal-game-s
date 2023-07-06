import React from 'react';
import '../HomePage.css';
import Logo from '../images/Damllogo.png';
import { Link } from 'react-router-dom';

export default function MenuBox() {
  return (
    <div className='menu-container'>
      <div className='menu-list'>
        <h3><img className='logo' src={Logo}/>Damal Game's</h3>
        <lo>
          <li>play</li>
        </lo>
      </div>
      <div className='log-btn'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/singup'><button>SingUp</button></Link>
      </div>
    </div>
  )
}
