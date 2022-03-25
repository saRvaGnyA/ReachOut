import React from 'react';
import './Footer.css';
import logo from '../../Logos/Logo2.png';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <img src={logo} />
          <h3>
            Reach<span>Out</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a> | <a href="#"> About</a> | 
            <a href="#"> Contact</a>
          </p>

          <p className="footer-company-name">
            ©️ 2022 ReachOut Community Pvt.Ltd
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>309 - Rupa Solitaire, Bldg. No. A - 1, Sector - 1</span>
              Mahape, Navi Mumbai - 400710
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+91 22-27782183</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@reachOut.com">support@reachOut.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <div>
              <button><Link to="/governmentlogin" style={{fontWeight:"bolder",fontSize:"larger",color:"#1DB954"}}>Government Login</Link></button>
            </div>
            <div style={{height:"20px"}}></div>
            <span>About the company</span>
            We offer training and skill building courses across Technology,
            Design, Management, Science and Humanities for physically challenged and disabled people.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;