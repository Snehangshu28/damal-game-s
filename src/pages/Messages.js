import React from 'react'
import MenuBox from '../components/MenuBox';
import ChatBox from '../components/ChatBox';

export default function Messages() {
  return (
    <div>
        <div className='menu-box'>
          <MenuBox/>
        </div>
        <div className='chat-box'>
          <ChatBox/>
      </div>
    </div>
  )
}
