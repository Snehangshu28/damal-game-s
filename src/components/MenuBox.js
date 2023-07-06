import React from 'react';
import '../HomePage.css';
import Logo from '../images/Damllogo.png';
import { Link } from 'react-router-dom';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ExtensionIcon from '@mui/icons-material/Extension';
import SchoolIcon from '@mui/icons-material/School';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function MenuBox() {
  return (
    <div className='menu-container'>
      <div className='menu-list'>
          <div className='damal-logo'>
            <img className='logo' src={Logo}/>
            <h3>Damal Game's</h3>
          </div>
        <lo className='menu-lo'>
          <li><SportsEsportsIcon/>  Play</li>
          <li><ExtensionIcon/>  Puzzles</li>
          <li><SchoolIcon/>  Learn</li>
          <li><VisibilityIcon/>  Watch</li>
          <li><NewspaperIcon/>  News</li>
          <li><PeopleIcon/>  Social</li>
          <li><MoreHorizIcon/>  More</li>
        </lo>
      </div>
      <div className='menu-input'>
        <input className='input-box' type='text' placeholder='search'/>
      </div>
      <div className='log-btn'>   
        <Link to='/login'><button className='login-btn'>Login</button></Link>
        <Link to='/singup'><button className='singup-btn'>SingUp</button></Link>
      </div>
    </div>
  )
}
