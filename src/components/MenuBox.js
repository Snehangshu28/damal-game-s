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
import LightModeIcon from '@mui/icons-material/LightMode';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { signOut } from "firebase/auth";
import { auth, database } from "../Firebase";
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function MenuBox() {

  const [user, setUser] = useLocalStorage();
  const naviget = useNavigate();    

  const deleteUser = () => {
    console.log("click");
      signOut(auth).then(() => {
          // Sign-out successful.
          setUser(null)
          
      }).catch((error) => {
          // An error happened.
      });
    }


    useEffect(()=>{
      if(!user){
        naviget('/')
      }
    },[user])


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
      <div className='list-footer'>   
        <lo className='help-lang'>
          <li><LightModeIcon/> Light UI</li>
          <li><SettingsIcon/>Settings</li>
          <li onClick={deleteUser}><LogoutIcon/> Log-out</li>
          <li><HelpIcon/> Help</li>
        </lo>
      </div>
    </div>
  )
}
