import React,{useEffect, useState} from 'react';
import '../HomePage.css';

import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

import { db } from "../Firebase";
import { useLocalStorage } from '../hooks/useLocalStorage';
import { collection, query, where, onSnapshot, addDoc, updateDoc, arrayUnion, doc} from 'firebase/firestore';
import { colors } from '@mui/material';



export default function ChatBox() {

  const [user] = useLocalStorage();
  const [users, setUsers] = useState([]);
  const [chats, setChats] = useState([]);
  const [chanel, setChanel] = useState(null);
  const [text, setText] = useState('');
  const [read, setRead] = useState(0)


  
  useEffect(() => {
      const recentRef = query(collection(db, 'loginUsers'), where("uid", "!=", user.uid));
      onSnapshot(recentRef, (snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data())
          setUsers(data);
      });
  }, []);




  useEffect(() => {
      subscribeChanels(user.uid)
  }, [user])

  useEffect(() => {
      console.log(chats.filter(ch => ch.id == chanel), chanel)
      
  }, [chats, chanel])

  

  const personalChat = async(userId) =>{
      const chanel = {
          created: Date.now(),
          users:[
              userId,
              user.uid
          ],
          messages: [{
              text: 'hi',
              uid: user.uid,
              read: false
          }]
      }

      // first check if already exists 
      const prevId = chats.findIndex(ch => ch.users.includes(userId))

      if (prevId >= 0) {
          setChanel(chats[prevId].id)
      } else {
          const chListRef = collection(db, 'chanel');
          await addDoc(chListRef, chanel).then((res)=>{
              setChanel(res.id)
          })
      }        
  }

  const subscribeChanels = (userId)=>{
      const chListRef = query( collection(db, 'chanel'), where('users', 'array-contains', userId));
      onSnapshot(chListRef, snapshot => {
          const data = snapshot.docs.map((doc) => {
              return {... doc.data(), id: doc.id }
          })
          setChats(data);
      }, err => {
          console.log(`Encountered error: ${err}`);
      });
  }

 const handelSubmit = async() =>{
  const chListRef = doc(db, 'chanel', chanel);
  await updateDoc(chListRef , {
      messages: arrayUnion({
          uid: user.uid,
          text,
          read: true
      })
  })
  setText('');
 }

 useEffect(()=>{
  const unreadMessages = chats.map(message => message.read === false);
  setRead(unreadMessages.length)
  console.log(unreadMessages.length);
 },[chats])

 

  return (
    <>
      <div className='chatbox-heading'>
        <h4 className='chatbox-icon'><EmailIcon/>Messages</h4>
      </div>
      <hr></hr>
      <div className='user-chatbox'>
        <div className='loginUser' >
          {
            users?.length && users.map((user) => (
              <>
              <div className='user-name' onClick={() => personalChat(user.uid)} onChange={read} key={user.uid}>{user.displayName}</div>
              </>
            ))
            }
        </div>
        <div className="chat-box2">
          {
            chanel && chats.filter(ch => ch.id == chanel)[0].messages.map((msg, i) => (
              <>
                <div key={i} className='chat-text' style={{
                  textAlign: msg.uid == user.uid ? 'right' : 'left',
                  color: msg.uid == user.uid ? '#66f1a0' : 'rgb(211 27 135)' 
                }}>{msg.text}</div>
              </>
            ))
          }
          {
            chanel && (<div className='chat-keybord'>
              <input value={text} className='chat-input' onChange={(e) => setText(e.target.value)} type='text' />
              <button className='chat-send-btn' onClick={handelSubmit}><SendIcon/></button>
            </div>)
          }

        </div>
      </div>
    </>
  )
}

