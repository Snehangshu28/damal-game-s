import React from 'react';
import '../HomePage.css';
import Logo from '../images/Damllogo.png';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

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
      </div>
      <div className='list-footer'>   
        <lo className='help-lang'>
          <li onClick={deleteUser}><LogoutIcon/> Log-out</li>
        </lo>
      </div>
    </div>
  )
}
