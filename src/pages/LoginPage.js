import React , { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import '../HomePage.css';

import { auth, provider, db } from "../Firebase"
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { useLocalStorage } from '../hooks/useLocalStorage';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


export default function LoginPage() {

  const [user, setUser] = useLocalStorage();

  const naviget = useNavigate();
  const [value, setValue] = useState({
    email: "",
    password: ""
  })
 
  const [error, setError] = useState("");
  const [submitButtonDis, setSubmitButtonDis]= useState(false)

  const [loginUsers, setLoginUsers] =useState([]);

  const updateUserCollection = async ({displayName, uid, email, photoURL}) => {
    const userData = {
      uid,
      displayName,
      email,
      photoURL,
      lastLogin: Date.now(),
      loggedin: true
    }
    const usersRef = collection(db, 'loginUsers');
    await setDoc(doc(usersRef, uid), userData)
    setUser(userData)
  }

  useEffect(()=>{
    if(user){
      naviget('/homepage')
    }
  },[user])

  


  const HandelSubmission = async(e) =>{
    e.preventDefault()

    if ( !value.email || !value.password) {
      setError("fill all fields");
      return;
    }
    setError("")
    setSubmitButtonDis(true)

    signInWithEmailAndPassword(auth, value.email, value.password).then(async(res)=>{
      setSubmitButtonDis(false);
      localStorage.setItem("email", value.email);
      updateUserCollection(res.user)
      
    })
    .catch((err)=>{
      setSubmitButtonDis(false);
      setError(err.message);
    })
  };
  

  return (
    <div className='login-back'>

      <div className='inner-box'>
      <h1 className='heading'>Login</h1>
            <input className='log-inputBox' type='text'  placeholder='enter your email'onChange={(e)=>{
              setValue((prev)=>({...prev , email: e.target.value}))
            }}/>
            <input className='log-inputBox' type='password'   placeholder='enter your password'onChange={(e)=>{
            setValue((prev)=>({...prev , password: e.target.value}))
          }}/>
            <div className='input-checkbox'>
            <input type="checkbox" />
            <p>Show password</p>
            </div>
          <div className='btn'>
          <b className='err'>{error}</b>
            <button onClick={HandelSubmission} disabled={submitButtonDis}>log-in</button>
          </div>
          <hr></hr>
          <p className='p-or'>or</p>

          <div className='browser-login'>
            <idv><GoogleIcon/></idv>
            <idv><FacebookIcon/></idv>
            <idv><TwitterIcon/></idv>
          </div>
          <p>
              Don't have an Account?{''}
              <span >
                <Link to="/singup" className='link-singup'>SingUp</Link>
              </span>
            </p>
      </div>
    </div>
  )
}
