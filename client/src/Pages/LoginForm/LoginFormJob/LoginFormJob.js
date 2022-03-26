import { useState } from 'react';
import { post } from 'axios';
import './LoginFormJob.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

import { useNavigate } from 'react-router-dom';

function LoginFormJob() {
  const { speak } = useSpeechSynthesis();
  const { transcript, resetTranscript } = useSpeechRecognition();

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [onFocusEmail, setOnFocusEmail] = useState(false);
  let [onFocusPassword, setOnFocusPassword] = useState(false);

  let [signUpUsername, setSignUpUsername] = useState('');
  let [signUpEmail, setSignUpEmail] = useState('');
  let [signUpPassword, setSignUpPassword] = useState('');
  let [signUpOnFocusUsername, setSignUpOnFocusUsername] = useState(false);
  let [signUpOnFocusEmail, setSignUpOnFocusEmail] = useState(false);
  let [signUpOnFocusPassword, setSignUpOnFocusPassword] = useState(false);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  let [voiceFill, setVoiceFill] = useState(false);

  function one() {
    setOnFocusEmail(true);
    setOnFocusPassword(false);
    if (email === '') {
      speak({
        text: 'Press Insert to start and Escape to end the Email Input.',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Email already filled.Press Insert to override and escape to stop.',
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
        text: 'Press Insert to start and Escape to end the Password Input.',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Password already filled.Press Insert to override and escape to stop.',
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
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusPassword(false);
    if (signUpUsername === '') {
      speak({
        text: 'Press Insert to start and Escape to end the Full Name input.',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Name already filled.Press Insert to override and escape to stop.',
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
    setSignUpOnFocusEmail(true);
    setSignUpOnFocusPassword(false);
    if (signUpEmail === '') {
      speak({
        text: 'Press Insert to start and Escape to end the Email Input.',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Email already filled.Press Insert to override and escape to stop.',
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
      setSignUpEmail(transcript);
      resetTranscript();
    }
  }
  function fiveSignUp() {
    setSignUpOnFocusUsername(false);
    setSignUpOnFocusEmail(false);
    setSignUpOnFocusPassword(true);
    if (signUpPassword === '') {
      speak({
        text: 'Press Insert to start and Escape to end the Password input.',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Password already filled.Press Insert to override and escape to stop.',
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
      setSignUpPassword(transcript);
      resetTranscript();
    }
  }
  let navigate = useNavigate();
  function RoutetoHire() {
    let path = `/showjobs`;
    navigate(path);
  }
  const baseurl = 'https://reachout-sql-server.herokuapp.com';

  async function submitLoginResponse(e) {
    e.preventDefault();
    console.log(email);
    console.log(password);
    const {
      data: { success, token },
    } = await post(`${baseurl}/auth/login-user`, {
      email: email,
      password: password,
    });
    if (success) {
      localStorage.setItem('token', token);
      localStorage.setItem('user',"true");
      RoutetoHire();
    }
  }
  function submitSignUpResponse(e) {
    e.preventDefault();
    console.log(signUpUsername);
    console.log(signUpEmail);
    console.log(signUpPassword);
  }

  async function handleLoginSubmit() {
    //...
    // Make the login API call
    const response = await fetch(`/auth/login-user`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    //...
    // Extract the JWT from the response
    const { jwt_token } = await response.json();
    //...
    // Do something the token in the login method
  }

  async function handleSignUpSubmit() {
    //...
    // Make the login API call
    const response = await fetch(``, {
      method: 'POST',
      body: JSON.stringify({ signUpEmail, signUpPassword, signUpUsername }),
    });
    //...
    // Extract the JWT from the response
    const { jwt_token } = await response.json();
    //...
    // Do something the token in the login method
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
                </h6>
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
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
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
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
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
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
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
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
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Sign Up</h4>
                          <div className="form-group">
                            {voiceFill ? (
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
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
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
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
                          <div className="form-group mt-2">
                            {voiceFill ? (
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                                value={
                                  signUpOnFocusEmail ? transcript : signUpEmail
                                }
                                onFocus={threeSignUp}
                                onKeyDown={(e) => fourSignUp(e)}
                                onChange={(e) => {
                                  setSignUpEmail(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
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
                          <div className="form-group mt-2">
                            {voiceFill ? (
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                                value={
                                  signUpOnFocusPassword
                                    ? transcript
                                    : signUpPassword
                                }
                                onFocus={fiveSignUp}
                                onKeyDown={(e) => sixSignUp(e)}
                                onChange={(e) => {
                                  setSignUpPassword(e.target.value);
                                }}
                              />
                            ) : (
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
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
                            href="#"
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

export default LoginFormJob;
