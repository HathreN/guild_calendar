import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import './Calendar.css';
import Guild from "./pages/Guild";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Upcoming from "./pages/Upcoming";
import Example from "./pages/index";

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
