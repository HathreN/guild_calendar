import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import './Calendar.css';
import Guild from "./components/Guild";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Upcoming from "./components/Upcoming";
import Example from "./components/index";

function App() {
  return (
      <div className="App">
        <div id="mainPage">
          <header id="header"><div id="logo" onClick={()=>(window.location='/')}><img src="./logo.png" alt="logo strony"/></div></header>
          <Router>
            <Routes>
              <Route path='/guild' element={<Guild/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/upcomming' element={<Upcoming/>}/>
              <Route path='/example' element={<Example/>}/>
            </Routes>
          </Router>
        </div>
      </div>
  );
}

export default App;
