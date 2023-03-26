import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import InTransit from './components/pages/InTransit';
import InHouse from './components/pages/InHouse';
import SignUp from './components/pages/SignUp';


function App() {
  return (
   <>
   <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/intransit" element={<InTransit />}/>
      <Route exact path="/inhouse" element={<InHouse />}/>
      <Route exact path="/sign-up" element={<SignUp />}/>
      </Routes>
      </Router>
   </>
  );
}

export default App;
