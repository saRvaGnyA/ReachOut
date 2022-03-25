import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from './RoutePages/NavBar/NavBar.js'
import Footer from './RoutePages/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage.js'
import LoginFormJob from './Pages/LoginForm/LoginFormJob/LoginFormJob';
import JobApplicationForm from './Pages/JobApplicationForm/JobApplicationForm';
import JobHiringForm from './Pages/JobHiringForm/JobHiringForm';
import GrevienceForm from './Pages/ContactUs/GrevienceForm';
import PopUp from './Pages/PopUp/PopUp';
import LoginFormCompany from './Pages/LoginForm/LoginFormCompany/LoginFormCompany';

function App() {

    let [font,setFont]=useState(true);

    function change(){
        if(font==true){
            setFont(false);
        }
        else{
            setFont(true);
        }
    }

    return(
        <div className={font?("f1"):("f2")}>
        <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route exact path="/login" element={<LoginFormJob />}/>
                <Route exact path="/apply" element={<JobApplicationForm />}/>
                <Route exact path="/hire" element={<JobHiringForm />} />
                <Route exact path="/grevience" element={<GrevienceForm/>}/>
                <Route exact path="/companyloginform" element={<LoginFormCompany/>}/>
            </Routes>
            <PopUp funct={change}/>
            <Footer/>
        </div>
        </Router>
        </div>
    );
}

export default App;