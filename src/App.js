import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './pages/Navbar';
import Project from './pages/Project';
import Dep from './pages/Dep';
import Bank from './pages/Bank';
import Header from './pages/Header';
import Login from './pages/login';

function App() {
  return (
    
    
    
    <BrowserRouter>
    <Routes>
       <Route path="/user" element={<Home />} />
       <Route path="/projects" element={<Project />} />
       <Route path="/deps" element={<Dep />} />
       <Route path="/" element={<Login />} />
       <Route path="/banks" element={<Bank />} />
       <Route path="/details" element={<Details />} />

       <Route path="/:id" element={<Details />} />
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
