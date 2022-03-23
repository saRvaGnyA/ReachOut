import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './RoutePages/NavBar/NavBar.js'
import Footer from './RoutePages/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage.js'
import LoginFormJob from './Pages/LoginForm/LoginFormJob/LoginFormJob';
import JobApplicationForm from './Pages/JobApplicationForm/JobApplicationForm';
import JobHiringForm from './Pages/JobHiringForm/JobHiringForm';

function App() {
    return(
        <div>
        <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route exact path="/login" element={<LoginFormJob />}/>
                <Route exact path="/apply" element={<JobApplicationForm />}/>
                <Route exact path="/hire" element={<JobHiringForm />} />
            </Routes>
            <Footer/>
        </div>
        </Router>
        </div>
    );
}

export default App;