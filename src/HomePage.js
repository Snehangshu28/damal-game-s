import React from 'react';
import "./HomePage.css";
import MenuBox from './components/MenuBox';
import GameBox from './components/GameBox';
import ChatBox from './components/ChatBox';


export default function MianPage() {
  return (
    <div className='main-box'>
      <div className='menu-box'>
          <MenuBox/>
      </div>
      <div className='game-box'>
          <GameBox/>
      </div>
      <div className='chat-box'>
          <ChatBox/>
      </div>
    </div>
  )
}