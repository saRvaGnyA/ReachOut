import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './RoutePages/NavBar/NavBar.js';
import Footer from './RoutePages/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage.js';
import LoginFormJob from './Pages/LoginForm/LoginFormJob/LoginFormJob';
import LoginFormCompany from './Pages/LoginForm/LoginFormCompany/LoginFormCompany';
import JobApplicationForm from './Pages/JobApplicationForm/JobApplicationForm';
import JobHiringForm from './Pages/JobHiringForm/JobHiringForm';
import GrevienceForm from './Pages/ContactUs/GrevienceForm';
import PopUp from './Pages/PopUp/PopUp';
import LoginFormGovernment from './Pages/LoginForm/LoginFormGovernment/LoginFormGovernment';
import GovernmentScheme from './Pages/GovernmentSchemeForm/GovernmentScheme';
import GovernmentSchemePage from './Pages/GovernmentSchemeForm/GovernmentSchemePage';
import GovernmentSchemeCard from './Pages/GovernmentSchemeForm/GovernmentSchemeCard';
import GovtHiringForm from './Pages/JobHiringForm/GovtHiring';
import ShowSchemes from './Pages/ShowSchemes/ShowSchemes';
import ShowJobs from './Pages/ShowJobs/ShowJobs'
function App() {
  let [font, setFont] = useState(true);

  function change() {
    if (font == true) {
      setFont(false);
    } else {
      setFont(true);
    }
  }

  return (
    <div className={font ? 'f1' : 'f2'}>
      <div className="textsize">
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route exact path="/userlogin" element={<LoginFormJob />} />
            <Route exact path="/companylogin" element={<LoginFormCompany />} />
            <Route exact path="/apply" element={<JobApplicationForm />} />
            <Route exact path="/hire" element={<JobHiringForm />} />
            <Route exact path="/grevience" element={<GrevienceForm />} />
            <Route exact path="/govthire" element={<GovtHiringForm />} />
            <Route exact path="/showschemes" element={<ShowSchemes />} />
            <Route exact path="/showjobs" element={<ShowJobs />} />
            <Route
              exact
              path="/governmentlogin"
              element={<LoginFormGovernment />}
            />
            <Route
              exact
              path="/governmentScheme"
              element={<GovernmentScheme />}
            />
            <Route
              exact
              path="/governmentSchemePage"
              element={<GovernmentSchemePage />}
            />
            <Route exact path="/governmentSchemeCard" element={<GovernmentSchemeCard />} />
          </Routes>
          <PopUp funct={change} />
          <Footer />
        </div>
      </Router>
      </div>
    </div>
  );
}

export default App;
