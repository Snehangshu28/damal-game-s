import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../HomePage.css';

import {createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function SingUpPage() {

  const naviget = useNavigate();
  const [value, setValue] = useState({
    name : "",
    email: "",
    password: ""
  })

  const [error, setError] = useState("");
  const [submitButtonDis, setSubmitButtonDis]= useState(false)

  const HandelSubmission =async (e) =>{
      e.preventDefault() 
      const{email,name}=value;

    if (!value.name || !value.email || !value.password) {
      setError("fill all fields");
      return;
    }
    setError("")
    console.log(value);

    setSubmitButtonDis(true)

    createUserWithEmailAndPassword(auth, value.email, value.password).then(async(res)=>{
      setSubmitButtonDis(false);
      const user = res.user;
      await updateProfile(user,{
        displayName:value.name
      })
      console.log(user);
    naviget("/")

    })
    .catch((err)=>{
      setSubmitButtonDis(false);
      setError(err.message);
    })

  };


  return (
    <div className='login-back'>
      <div className='inner-box'>
      <h1 className='heading'>SingUp</h1>
            <input className='log-inputBox' type='text'  placeholder='userName'onChange={(e)=>{
            setValue((prev)=>({...prev , name: e.target.value}))
          }} />
            <input className='log-inputBox' type='text'  placeholder='enter your email' onChange={(e)=>{
            setValue((prev)=>({...prev , email: e.target.value}))
          }}/>
            <input className='log-inputBox' type='password'   placeholder='enter your password'onChange={(e)=>{
            setValue((prev)=>({...prev , password: e.target.value}))
          }}/>
          <div className='btn'>
          <b className='err'>{error}</b>
            <button onClick={HandelSubmission} disabled={submitButtonDis}>Sing-up</button>
          </div>
          <hr></hr>
          <p className='p-or'>or</p>

          <div className='browser-login'>
            <idv><GoogleIcon/></idv>
            <idv><FacebookIcon/></idv>
            <idv><TwitterIcon/></idv>
          </div>
          <p>
              Already have an Account?{''}
              <span >
                <Link to="/" className='link-singup'>Login</Link>
              </span>
            </p>
      </div>
    </div>
  )
}
