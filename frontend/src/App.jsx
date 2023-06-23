import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Dprofile from './pages/Dprofile';
import Plans from './pages/Plans';
import Pprofile from './pages/Pprofile';
import Qna from './pages/Qna';
import Regdoc from './pages/Regdoc';
import Regpvt from './pages/Regpvt';
import Regpatient from './pages/Regpatient'
import Report from './pages/Report';
import Table from './components/Table';
import Select from './pages/Select';
import Userlogin from './pages/Userlogin';
import UserHome from './pages/UserHome';




export default function App() {

  return (
    <div>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route path="/physician" element={<Dprofile />} />
          <Route path="/subscriptions" element={<Plans />} />
          <Route path="/user" element={<Pprofile />} />
          <Route path="/q&a" element={<Qna />} />
          <Route path="/registerphy" element={<Regdoc />} />
          <Route path="/registerusr" element={<Regpvt />} />
          <Route path="/report" element={<Report />} />
          <Route path="/newpatient" element={<Regpatient />} />
          <Route path="/select" element={<Select />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path="/userhome" element={<UserHome />} />

        </Routes>

      </Router>

    </div>
  )
}

