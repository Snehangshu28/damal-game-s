import React from 'react';
import '../HomePage.css';
import { Link } from 'react-router-dom';

import GroupIcon from '@mui/icons-material/Group';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsIcon from '@mui/icons-material/Settings';

import { useLocalStorage } from '../hooks/useLocalStorage';


export default function GameBox() {

  const [user] = useLocalStorage();

  const fullName = user.displayName;
  const intials = fullName.split(' ').map(name => name[0]).join('').toUpperCase();
  console.log(fullName, intials);
  
  return (
    <div className='game-container'>
        <div className='currentUser'>
          <div className='userAvater'>{intials}</div>
          <div className='userName'>{user.displayName}</div>
          <div className='curentUserIcon'>
              <GroupIcon/>
              
              <Link to="/messages" style={{color:"white"}}><MarkunreadIcon/></Link>
              <SettingsIcon/>
          </div>
        </div>
        <img className='img-1' src='https://t4.ftcdn.net/jpg/04/42/21/53/360_F_442215355_AjiR6ogucq3vPzjFAAEfwbPXYGqYVAap.jpg'></img>
        <img className='img-2' src="https://img.freepik.com/premium-photo/illustration-gaming-joystick_800563-4110.jpg"></img>
        <h1 style={{marginLeft:"10%"}}>Play agme </h1>
        <img className='img-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaOWsTUobPJK3AuvBWQINivh4dVZA5V6rrhGEhIum'/>
    </div>
  )
}
