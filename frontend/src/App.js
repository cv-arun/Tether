import {Routes,Route} from "react-router-dom";
import './App.css';

import Home from './pages/home';
import Signup from './pages/signup';
import Login from './pages/login'
function App() {
  return (
    <Routes>
     <Route exact path="/" element={<Home />} />
     <Route  path="/signup" element={<Signup />} />
     <Route  path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
