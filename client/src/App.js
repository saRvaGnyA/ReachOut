import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './RoutePages/NavBar/NavBar.js';
import Footer from './RoutePages/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage.js';
import LoginFormJob from './Pages/LoginForm/LoginFormJob/LoginFormJob';
import JobApplicationForm from './Pages/JobApplicationForm/JobApplicationForm';
import JobHiringForm from './Pages/JobHiringForm/JobHiringForm';
import GrevienceForm from './Pages/ContactUs/GrevienceForm';
import PopUp from './Pages/PopUp/PopUp';
import { BrowserRouter } from 'react-router-dom';

function App() {
  let [font, setFont] = useState(true);
  let [fontbold, setFontbold] = useState(true);

  function change() {
    if (font == true) {
      setFont(false);
    } else {
      setFont(true);
    }
  }
  function fontsizebold() {
    if (fontbold === true) {
      setFontbold(false);
      console.log('true bold');
    } else {
      setFontbold(true);
      console.log('false bold');
    }
  }

  return (
    <div className={font ? 'f1' : 'f2'}>
      <div className={fontbold ? 'bold' : 'notbold'}>
        <div className="textsize">
          <Router>
            <div>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route exact path="/login" element={<LoginFormJob />} />
                <Route exact path="/apply" element={<JobApplicationForm />} />
                <Route exact path="/hire" element={<JobHiringForm />} />
                <Route exact path="/grevience" element={<GrevienceForm />} />
              </Routes>
              <PopUp funct={change} function={fontsizebold} />
              <Footer />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
