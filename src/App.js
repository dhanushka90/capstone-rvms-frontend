import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import InTransit from './components/pages/InTransit';
import InHouse from './components/pages/InHouse';
import JourneyRefrigerator from './components/pages/JourneyRefrigerator';
import User from './components/pages/User';
import SignUp from './components/pages/SignUp';
import ListUserData from './components/ListUserData';
import CreateUpdateUser from './components/CreateUpdateUser';
import ViewUser from './components/ViewUser';
import ListJourneyRefrigeratorData from './components/ListJourneyRefrigeratorData';
import CreateUpdateJourneyRefrigerator from './components/CreateUpdateJourneyRefrigerator';
import ViewJourneyRefrigerator from './components/ViewJourneyRefrigerator';

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
      <Route exact path="/journeyRefrigerator" element={<JourneyRefrigerator />}/>
      {/* <Route exact path="/user" element={<User />}/> */}
      <Route path="/user" element={<ListUserData />} />
      <Route path="/add-user" element={<CreateUpdateUser />} />
      <Route path="/update-user/:id" element={<CreateUpdateUser />} />
      <Route path="/view-user/:id" element={<ViewUser/>} />


      <Route path="/journeyRefrigeratorList" element={<ListJourneyRefrigeratorData/>} />
      <Route path="/add-journeyRefrigerator" element={<CreateUpdateJourneyRefrigerator />} />
      <Route path="/update-journeyRefrigerator/:id" element={<CreateUpdateJourneyRefrigerator />} />
      <Route path="/view-journeyRefrigerator/:id" element={<ViewJourneyRefrigerator/>} />

      <Route exact path="/sign-up" element={<SignUp />}/>
      </Routes>
      </Router>
   </>
  );
}

export default App;
