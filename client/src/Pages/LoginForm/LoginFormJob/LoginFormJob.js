import { useEffect, useState } from 'react';
import './LoginFormJob.css'
import { useSpeechSynthesis } from "react-speech-kit";

function LoginFormJob(){
    const { speak } = useSpeechSynthesis();
    const { transcript } = useSpeechRecognition()
    const [value,setValue]=useState("Do you want to fill the form by speech.Press Tab space for yes.");
    useEffect(()=>{
        //speak({ text:value})
    },[]);

    let voiceSelection=true;
    let logInStatus="Logged In Successfully";
    let signUpStatus="";

    function emailResponse(){
        if(voiceSelection===true){
            speak({text:"Enter your Email"});  
        }
    }
    function passwordResponse(){
        if(voiceSelection===true){
            speak({text:"Enter your Password"});
        }
    }

    function fullNameResponse(){
        if(voiceSelection===true){
            speak({text:"Enter your Full Name"});
        }
    }
    function submitLoginResponse(){
        if(voiceSelection===true){
            if(logInStatus==="Logged In Successfully"){
                speak({text:"User Logged In Succesfully"})
            }
            else{
                speak({text:"Invalid Username or Email or Password"})
            }
        }
    }
    function submitSignUpResponse(){
        if(voiceSelection===true){
            if(signUpStatus==="User Registered Successfully"){
                speak({text:"User Registered Succesfully"})
            }
            else{
                speak({text:"User Already Exists"})
            }
        }
    }

    return (
        <div>
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                            <input className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
                            <label for="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" onSelect={emailResponse}/>
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>	
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off"
                                                    onSelect={passwordResponse}/>
                                                    <i className="input-icon uil uil-lock-alt" ></i>
                                                </div>
                                                <a href="#" className="btn mt-4" onClick={submitLoginResponse}>submit</a>
                                                <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" onSelect={fullNameResponse}/>
                                                    <i className="input-icon uil uil-user"></i>
                                                </div>	
                                                <div className="form-group mt-2">
                                                    <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" onSelect={emailResponse}/>
                                                    <i className="input-icon uil uil-at"></i>
                                                </div>	
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" onSelect={passwordResponse}/>
                                                    <i className="input-icon uil uil-lock-alt"></i>
                                                </div>
                                                <a href="#" className="btn mt-4" onClick={submitSignUpResponse}>submit</a>
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