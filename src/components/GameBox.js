import React from 'react';
import '../HomePage.css';

import { useLocalStorage } from '../hooks/useLocalStorage';


export default function GameBox() {

  const [user] = useLocalStorage();


  return (
    <div className='game-container'>
        <div className='currentUser'>
          <div className='userAvater'>A</div>
          <div className='userName'>{user.displayName}</div>
        </div>
        <img src="https://img.freepik.com/premium-photo/illustration-gaming-joystick_800563-4110.jpg"></img>
        <h1>Play agme </h1>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfaOWsTUobPJK3AuvBWQINivh4dVZA5V6rrhGEhIum'/>
    </div>
  )
}
