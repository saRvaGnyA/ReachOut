import { useState } from 'react';
import { post } from 'axios';
import './LoginFormCompany.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

function LoginFormCompany() {
  const { speak } = useSpeechSynthesis();
  const { transcript, resetTranscript } = useSpeechRecognition();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [onFocusEmail, setOnFocusEmail] = useState(false);
  let [onFocusPassword, setOnFocusPassword] = useState(false);

  let [signUpUsername, setSignUpUsername] = useState('');
  const [signUpHead, setSignUpHead] = useState('');
  let [signUpEmail, setSignUpEmail] = useState('');
  let [signUpMobile, setSignUpMobile] = useState('');
  const [signUpWebsite, setSignUpWebsite] = useState('');
  const [signUpGstIn, setSignUpGstIn] = useState('');
  let [signUpPassword, setSignUpPassword] = useState('');

  let [signUpOnFocusUsername, setSignUpOnFocusUsername] = useState(false);
  let [signUpOnFocusHead, setSignUpOnFocusHead] = useState(false);
  let [signUpOnFocusEmail, setSignUpOnFocusEmail] = useState(false);
  let [signUpOnFocusMobile, setSignUpOnFocusMobile] = useState(false);
  let [signUpOnFocusWebsite, setSignUpOnFocusWebsite] = useState(false);
  let [signUpOnFocusGstIn, setSignUpOnFocusGstIn] = useState(false);
  let [signUpOnFocusPassword, setSignUpOnFocusPassword] = useState(false);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  // AAGE ISPE DHYAN RAKH BSDK
  //   let [voiceFill, setVoiceFill] = useState(true);
  let [voiceFill, setVoiceFill] = useState(false);

  function one() {
    setOnFocusEmail(true);
    setOnFocusPassword(false);
    if (email === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Email',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Email already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function two(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setEmail(transcript);
      resetTranscript();
    }
  }
  function three() {
    setOnFocusEmail(false);
    setOnFocusPassword(true);
    if (password === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Password',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Password already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function four(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setPassword(transcript);
      resetTranscript();
    }
  }
  function oneSignUp() {
    setSignUpOnFocusUsername(true);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(false);
    if (signUpUsername === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Name',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Name already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twoSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpUsername(transcript);
      resetTranscript();
    }
  }
  function threeSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(true);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(false);
    if (signUpHead === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Head',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Head already filled. Press Insert to override and escape to stop.',
      });
    }
  }
  function fourSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpHead(transcript);
      resetTranscript();
    }
  }
  function fiveSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(true);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(false);
    if (signUpEmail === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Email',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Email already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function sixSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpEmail(transcript);
      resetTranscript();
    }
  }
  function sevenSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(true);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(false);
    if (signUpMobile === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Mobile',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Mobile already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function eightSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpMobile(transcript);
      resetTranscript();
    }
  }
  function nineSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(true);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(false);
    if (signUpWebsite === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company Website',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company Website already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function tenSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpWebsite(transcript);
      resetTranscript();
    }
  }
  function elevenSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(true);
    setSignUpOnFocusPassword(false);
    if (signUpGstIn === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Company GST IN Number',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Company GST IN Number already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twelveSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpGstIn(transcript);
      resetTranscript();
    }
  }
  function thirteenSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusHead(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusMobile(false);
    setSignUpOnFocusWebsite(false);
    setSignUpOnFocusGstIn(false);
    setSignUpOnFocusPassword(true);
    if (signUpPassword === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Password',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Password already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function fourteenSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSignUpPassword(transcript);
      resetTranscript();
    }
  }

  const baseurl = 'https://reachout-sql-server.herokuapp.com';

  async function submitLoginResponse(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const {
      data: { success, token },
    } = await post(`${baseurl}/auth/login-company`, {
      company_email: email,
      password: password,
    });
    if (success) {
      localStorage.setItem('token', token);
    }
  }
  async function submitSignUpResponse(e) {
    e.preventDefault();
    console.log(signUpUsername);
    console.log(signUpEmail);
    console.log(signUpPassword);
    const {
      data: { success, token },
    } = await post(`${baseurl}/auth/register-company`, {
      company_name: signUpUsername,
      company_head: signUpHead,
      company_email: signUpEmail,
      company_mobile: signUpMobile,
      company_website: signUpWebsite,
      gstin: signUpGstIn,
      password: password,
    });
    if (success) {
      localStorage.setItem('token', token);
    }
  }

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3">
                  <span>Log In </span>
                  <span>Sign Up</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div
                      className="card-front"
                      style={{ paddingTop: '12rem', paddingBottom: '15rem' }}
                    >
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Company Email"
                                id="logemail"
                                autocomplete="off"
                                value={onFocusEmail ? transcript : email}
                                onFocus={one}
                                onKeyDown={(e) => two(e)}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="email"
                                className="form-style"
                                placeholder="Company Email"
                                id="logemail"
                                autocomplete="off"
                                value={email}
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group mt-2">
                            {voiceFill ? (
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Company Password"
                                id="logpass"
                                autocomplete="off"
                                value={onFocusPassword ? transcript : password}
                                onFocus={three}
                                onKeyDown={(e) => four(e)}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Company Password"
                                id="logpass"
                                autocomplete="off"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a className="btn mt-4" onClick={submitLoginResponse}>
                            submit
                          </a>
                          <p className="mb-0 mt-4 text-center">
                            <a href="#0" className="link">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="card-back"
                      style={{
                        paddingTop: '17rem',
                        paddingBottom: '15rem',
                        marginBottom: '5 rem',
                      }}
                    >
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="text"
                                name="company_name"
                                className="form-style"
                                placeholder="Company Name"
                                id="logname"
                                autocomplete="off"
                                value={
                                  signUpOnFocusUsername
                                    ? transcript
                                    : signUpUsername
                                }
                                onFocus={oneSignUp}
                                onKeyDown={(e) => twoSignUp(e)}
                                onChange={(e) => {
                                  setSignUpUsername(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="text"
                                name="company_name"
                                className="form-style"
                                placeholder="Company Name"
                                id="logname"
                                autocomplete="off"
                                value={signUpUsername}
                                onChange={(e) => {
                                  setSignUpUsername(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="text"
                                name="company_head"
                                className="form-style"
                                placeholder="Company Head"
                                id="logname"
                                autocomplete="off"
                                value={
                                  signUpOnFocusHead ? transcript : signUpHead
                                }
                                onFocus={threeSignUp}
                                onKeyDown={(e) => fourSignUp(e)}
                                onChange={(e) => {
                                  setSignUpHead(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="text"
                                name="company_head"
                                className="form-style"
                                placeholder="Company Head"
                                id="logname"
                                autocomplete="off"
                                value={signUpHead}
                                onChange={(e) => {
                                  setSignUpHead(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-user"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="company_email"
                                className="form-style"
                                placeholder="Company Email"
                                id="logemail"
                                autocomplete="off"
                                value={
                                  signUpOnFocusEmail ? transcript : signUpEmail
                                }
                                onFocus={fiveSignUp}
                                onKeyDown={(e) => sixSignUp(e)}
                                onChange={(e) => {
                                  setSignUpEmail(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="company_email"
                                className="form-style"
                                placeholder="Company Email"
                                id="logemail"
                                autocomplete="off"
                                value={signUpEmail}
                                onChange={(e) => {
                                  setSignUpEmail(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="company_mobile"
                                className="form-style"
                                placeholder="Company Mobile"
                                id="logemail"
                                autocomplete="off"
                                value={
                                  signUpOnFocusMobile
                                    ? transcript
                                    : signUpMobile
                                }
                                onFocus={sevenSignUp}
                                onKeyDown={(e) => eightSignUp(e)}
                                onChange={(e) => {
                                  setSignUpMobile(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="company_mobile"
                                className="form-style"
                                placeholder="Company Mobile"
                                id="logemail"
                                autocomplete="off"
                                value={signUpMobile}
                                onChange={(e) => {
                                  setSignUpMobile(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="company_website"
                                className="form-style"
                                placeholder="Company Website"
                                id="logemail"
                                autocomplete="off"
                                value={
                                  signUpOnFocusWebsite
                                    ? transcript
                                    : signUpWebsite
                                }
                                onFocus={nineSignUp}
                                onKeyDown={(e) => tenSignUp(e)}
                                onChange={(e) => {
                                  setSignUpWebsite(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="company_website"
                                className="form-style"
                                placeholder="Company Website"
                                id="logemail"
                                autocomplete="off"
                                value={signUpWebsite}
                                onChange={(e) => {
                                  setSignUpWebsite(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="gstin"
                                className="form-style"
                                placeholder="GST IN Number"
                                id="logemail"
                                autocomplete="off"
                                value={
                                  signUpOnFocusGstIn ? transcript : signUpGstIn
                                }
                                onFocus={elevenSignUp}
                                onKeyDown={(e) => twelveSignUp(e)}
                                onChange={(e) => {
                                  setSignUpGstIn(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="gstin"
                                className="form-style"
                                placeholder="GST IN Number"
                                id="logemail"
                                autocomplete="off"
                                value={signUpGstIn}
                                onChange={(e) => {
                                  setSignUpGstIn(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-at"></i>
                          </div>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Company Password"
                                id="logpass"
                                autocomplete="off"
                                value={
                                  signUpOnFocusPassword
                                    ? transcript
                                    : signUpPassword
                                }
                                onFocus={thirteenSignUp}
                                onKeyDown={(e) => fourteenSignUp(e)}
                                onChange={(e) => {
                                  setSignUpPassword(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="password"
                                name="password"
                                className="form-style"
                                placeholder="Company Password"
                                id="logpass"
                                autocomplete="off"
                                value={signUpPassword}
                                onChange={(e) => {
                                  setSignUpPassword(e.target.value);
                                }}
                              />
                            )}
                            <i className="input-icon uil uil-lock-alt"></i>
                          </div>
                          <a
                            className="btn mt-4"
                            onClick={submitSignUpResponse}
                          >
                            submit
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormCompany;
