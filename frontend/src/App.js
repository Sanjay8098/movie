import './App.css';
import { BrowserRouter as HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
// import Navbar from './component/navBar.js';
import Signup from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Main from './pages/MainScreen'
// import UpdateScreen from './pages/UpdateScreen';

import 'react-toastify/dist/ReactToastify.css';

function App() {
 
        

  return (
    <>
    {/* <div className='App'> */}
      {/* <Home/> */}
      <HashRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Main/>} />

      </Routes>
      {/* </header> */}
      </HashRouter>
    {/* </div> */}
    </>
  );
}

export default App;
