import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage';
import LoginPage from './pages/LoginPage';
import SingUpPage from './pages/SingUpPage'
import Messages from './pages/Messages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/homepage' element={<HomePage/>}/>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/singup' element= {<SingUpPage/>}/>
          <Route path='/messages' element= {<Messages/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
