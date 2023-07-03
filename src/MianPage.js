import React from 'react';
import "./MainPage.css"
import MiniDrawer from './mui/MiniDrawer';
import ChatBox from './components/ChatBox';

export default function MianPage() {
  return (
    <div className='main-box'>
    <div>
        <MiniDrawer/>
        
    </div>
    <div>
        <ChatBox/>
    </div>
    </div>
  )
}
