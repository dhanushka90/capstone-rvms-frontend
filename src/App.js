import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

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
import ViewRefrigeratorById from './components/ViewRefrigeratorById';
import ViewJourneyById from './components/ViewJourneyById';

function App() {
  return (

    <>
      <Toaster
        position='top-right'
        gutter={8}
        containerStyle={{ top: 80 }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/intransit" element={<InTransit />} />
          <Route exact path="/inhouse" element={<InHouse />} />
          <Route exact path="/journeyRefrigerator" element={<JourneyRefrigerator />} />
          {/* <Route exact path="/user" element={<User />}/> */}
          <Route path="/user" element={<ListUserData />} />
          <Route path="/add-user" element={<CreateUpdateUser />} />
          <Route path="/update-user/:id" element={<CreateUpdateUser />} />
          <Route path="/view-user/:id" element={<ViewUser />} />


      <Route path="/journeyRefrigeratorList" element={<ListJourneyRefrigeratorData/>} />
      <Route path="/add-journeyRefrigerator" element={<CreateUpdateJourneyRefrigerator />} />
      <Route path="/update-journeyRefrigerator/:id" element={<CreateUpdateJourneyRefrigerator />} />
      {/* <Route path="/view-journeyRefrigerator/:id" element={<ViewJourneyRefrigerator/>} /> */}
      <Route path="/view-journeyRefrigerator/:jrId" element={<ViewRefrigeratorById />} />
      <Route path="/view-journeyRefrigerator/:jrId" element={<ViewJourneyById />} />




          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
