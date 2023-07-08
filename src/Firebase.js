import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBBvduUogeiJNtlLcy8r633KkTA5xtTPGo",
  authDomain: "fairbas-auth-1.firebaseapp.com",
  databaseURL: "https://fairbas-auth-1-default-rtdb.firebaseio.com",
  projectId: "fairbas-auth-1",
  storageBucket: "fairbas-auth-1.appspot.com",
  messagingSenderId: "112235738442",
  appId: "1:112235738442:web:0547076fcf108d1611fdb3",
  measurementId: "G-YVQEEYJME1"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export{
    app,
    auth,
    provider,
    db
}