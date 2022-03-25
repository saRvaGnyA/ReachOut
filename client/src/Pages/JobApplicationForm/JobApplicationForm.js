import './JobApplicationForm.css';
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';

function JobApplicationForm() {
  let [first, setFirst] = useState(true);
  let [second, setSecond] = useState(false);
  let [third, setThird] = useState(false);

  let [fullName, setFullName] = useState('');
  let [mobile, setMobile] = useState('');
  let [email, setEmail] = useState('');
  let [aadhar, setAadhar] = useState('');
  let [age, setAge] = useState('');

  let [password, setPassword] = useState('');
  let [disabilityType, setDisabilityType] = useState('');
  let [disability, setDisability] = useState('');
  let [severity, setSeverity] = useState('');
  let [jobPreference, setJobPreference] = useState('');

  let [qualification, setQualification] = useState('');
  let [sector, setSector] = useState('');
  let [placePreference, setPlacePreference] = useState('');

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  let [voiceFill, setVoiceFill] = useState(true);

  const { speak } = useSpeechSynthesis();
  const { transcript, resetTranscript } = useSpeechRecognition();

  let [onFocusFullName, setOnFocusFullName] = useState(false);
  let [onFocusMobile, setOnFocusMobile] = useState(false);
  let [onFocusEmail, setOnFocusEmail] = useState(false);
  let [onFocusAadhar, setOnFocusAadhar] = useState(false);
  let [onFocusAge, setOnFocusAge] = useState(false);
  let [onFocusPassword, setOnFocusPassword] = useState(false);
  let [onFocusDisabilityType, setOnFocusDisabilityType] = useState(false);
  let [onFocusDisability, setOnFocusDisability] = useState(false);
  let [onFocusSeverity, setOnFocusSeverity] = useState(false);
  let [onFocusJobPreference, setOnFocusJobPreference] = useState(false);
  let [onFocusQualification, setOnFocusQualification] = useState(false);
  let [onFocusSector, setOnFocusSector] = useState(false);
  let [onFocusPlacePreference, setOnFocusPlacePreference] = useState(false);

  function firstTrue() {
    setFirst(true);
    setSecond(false);
    setThird(false);
  }
  function firstFalse() {
    setFirst(false);
    secondTrue();
  }
  function secondTrue() {
    setSecond(true);
    setFirst(false);
    setThird(false);
  }
  function secondFalse() {
    setSecond(false);
    thirdTrue();
  }
  function thirdTrue() {
    setThird(true);
    setFirst(false);
    setSecond(false);
  }
  function thirdFalse() {
    setSecond(false);
  }

  async function handleSubmit() {
    //...
    // Make the login API call
    const response = await fetch(`/auth/register-user`, {
      method: 'POST',
      body: JSON.stringify({
        fullName,
        email,
        aadhar,
        mobile,
        age,
        password,
        placePreference,
        disabilityType,
        disability,
        severity,
        qualification,
      }),
    });
    //...
    // Extract the JWT from the response
    const { jwt_token } = await response.json();
    //...
    // Do something the token in the login method
    //await login({ jwt_token })
  }

  function jobApplicationSubmit(e) {
    e.preventDefault();
        console.log(fullName);
        console.log(mobile);
        console.log(email);
        console.log(aadhar);
        console.log(age);
        console.log(password);
        console.log(disabilityType);
        console.log(disability);
        console.log(severity);
        console.log(jobPreference);
        console.log(qualification);
        console.log(sector);
        console.log(placePreference);
  }

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
    setOnFocusFullName(true);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);

    if (fullName === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Full Name',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Full Name already filled.Press Insert to override and escape to stop.',
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
      setFullName(transcript);
      resetTranscript();
    }
  }
  function threeSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(true);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (mobile === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Mobile Number',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Mobile Number already filled. Press Insert to override and escape to stop.',
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
      setMobile(transcript);
      resetTranscript();
    }
  }
  function fiveSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(true);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (email === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Email',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Email already filled.Press Insert to override and escape to stop.',
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
      setEmail(transcript);
      resetTranscript();
    }
  }
  function sevenSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(true);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (aadhar === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Aadhar Card Number',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Aadhar Card Number already filled.Press Insert to override and escape to stop.',
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
      setAadhar(transcript);
      resetTranscript();
    }
  }
  function nineSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(true);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (age === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Age',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Age already filled.Press Insert to override and escape to stop.',
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
      setAge(transcript);
      resetTranscript();
    }
  }
  function elevenSignUp() {
    setOnFocusFullName(true);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(true);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (password === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for password',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Password already filled.Press Insert to override and escape to stop.',
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
      setPassword(transcript);
      resetTranscript();
    }
  }
  function thirteenSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(true);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (disabilityType === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Disability Type',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Disability Type already filled.Press Insert to override and escape to stop.',
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
      setDisabilityType(transcript);
      resetTranscript();
    }
  }
  function fifteenSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(true);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (disability === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Disability',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Disability already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function sixteenSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setDisability(transcript);
      resetTranscript();
    }
  }
  function seventeenSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(true);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (severity === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Severity',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Severity already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function eighteenSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSeverity(transcript);
      resetTranscript();
    }
  }
  function nineteenSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(true);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (jobPreference === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Job Preference',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Job Preference already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twentySignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setJobPreference(transcript);
      resetTranscript();
    }
  }
  function twentyOneSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(true);
    setOnFocusSector(false);
    setOnFocusPlacePreference(false);
    if (qualification === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Qualification',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Qualification already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twentyTwoSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setQualification(transcript);
      resetTranscript();
    }
  }
  function twentythreeSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(true);
    setOnFocusPlacePreference(false);
    if (sector === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Sector',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Sector already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twentyfourSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSector(transcript);
      resetTranscript();
    }
  }
  function twentyfiveSignUp() {
    setOnFocusFullName(false);
    setOnFocusMobile(false);
    setOnFocusEmail(false);
    setOnFocusAadhar(false);
    setOnFocusAge(false);
    setOnFocusPassword(false);
    setOnFocusDisabilityType(false);
    setOnFocusDisability(false);
    setOnFocusSeverity(false);
    setOnFocusJobPreference(false);
    setOnFocusQualification(false);
    setOnFocusSector(false);
    setOnFocusPlacePreference(true);
    if (placePreference === '') {
      speak({
        text: 'Press Insert to start and Escape to end the input for Place Preference',
      });
      resetTranscript();
    } else {
      speak({
        text: 'Place Preference already filled.Press Insert to override and escape to stop.',
      });
    }
  }
  function twentySixSignUp(event) {
    if (event.keyCode === 45) {
      resetTranscript();
      startListening();
      console.log('Listening started');
    } else if (event.keyCode === 27) {
      console.log(transcript);
      stopListening();
      console.log('Listening stopped');
      setSector(transcript);
      resetTranscript();
    }
  }
  return (
    <div>
      <div className="relative h-full text-gray-100 rounded-lg shadow-showcase">
        <div className="absolute left-0 -ml-12 h-full flex flex-col justify-center">
          <button className="p-5 bg-primary-light bg-opacity-90 bg-blur rounded-tl-lg rounded-tr-lg focus:outline-none">
            <svg viewBox="0 0 20 20" className="h-8 w-8 fill-accent">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button className="p-5 bg-primary-lighter bg-opacity-90 bg-blur rounded-bl-lg rounded-br-lg focus:outline-none">
            <svg viewBox="0 0 20 20" className="h-8 w-8 fill-primary-lightest">
              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                fill-rule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
        <main className="relative z-10 flex flex-col lg:flex-row mx-10 sm:mx-20 md:mx-32">
          <div className="lg:w-7/12 lg:mr-16 space-y-6">
            <section>
              <header className="font-semibold text-primary-lightest text-xl px-8 mb-3">
                Find your dream job now!
              </header>
              <div className="flex flex-wrap bg-primary-light bg-opacity-75 bg-blur px-8 py-12 rounded-lg">
                {/*<div className="h-40 w-40 ml-16 mr-24 bg-primary-light rounded-full"></div>*/}
                <div className="space-y-4 ml-8">
                  <div className="relative flex flex-col">
                    <span className="absolute left-0 top-0 mt-2 -ml-8 h-3 w-3 bg-accent rounded-full"></span>
                    <span className="text-lg font-semibold">
                      Select a role and we'll show you relevant jobs for it!
                    </span>
                    {/* <span className="text-sm text-primary-lightest leading-none">out of 5.00 GB</span> */}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                      Apply to millions of job opportunities across top
                      companies, industries and locations on India's No.1 job
                      site
                    </span>
                    {/* <span className="text-sm text-primary-lightest leading-none">Data Expiry</span> */}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg text-accent font-semibold">
                      find the next step in your career.
                    </span>
                    <span className="text-sm text-primary-lightest leading-none">
                      Status
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section></section>
          </div>
          <div className="relative lg:w-5/12">
            <section style={{ paddingBottom: '60px' }}>
              <header className="font-semibold text-primary-lightest text-xl px-8 mb-3">
                Apply for Job
              </header>
              <div className="bg-primary-light bg-opacity-75 bg-blur rounded-lg p-8 space-y-4">
                {first ? (
                  <div>
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusFullName ? transcript : fullName}
                        onFocus={oneSignUp}
                        onKeyDown={(e) => twoSignUp(e)}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Full Name"
                        id="logemail"
                        autocomplete="off"
                        value={fullName}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Mobile"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusMobile ? transcript : mobile}
                        onFocus={threeSignUp}
                        onKeyDown={(e) => fourSignUp(e)}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Mobile"
                        id="logemail"
                        autocomplete="off"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusEmail ? transcript : email}
                        onFocus={fiveSignUp}
                        onKeyDown={(e) => sixSignUp(e)}
                        onChange={(e) => {
                          setFullName(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Email"
                        id="logemail"
                        autocomplete="off"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Aadhar Card number"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusAadhar ? transcript : aadhar}
                        onFocus={sevenSignUp}
                        onKeyDown={(e) => eightSignUp(e)}
                        onChange={(e) => {
                          setAadhar(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Aadhar Card Number"
                        id="logemail"
                        autocomplete="off"
                        value={aadhar}
                        onChange={(e) => {
                          setAadhar(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Age"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusAge ? transcript : age}
                        onFocus={nineSignUp}
                        onKeyDown={(e) => tenSignUp(e)}
                        onChange={(e) => {
                          setAadhar(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Age"
                        id="logemail"
                        autocomplete="off"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                        }}
                      />
                    )}
                    <div className="flex">
                      <button
                        className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                        onClick={firstFalse}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                {second ? (
                  <div>
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Create Password"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusPassword ? transcript : password}
                        onFocus={elevenSignUp}
                        onKeyDown={(e) => twelveSignUp(e)}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Create Password"
                        id="logemail"
                        autocomplete="off"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Disability Type"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={
                          onFocusDisabilityType ? transcript : disabilityType
                        }
                        onFocus={thirteenSignUp}
                        onKeyDown={(e) => fourteenSignUp(e)}
                        onChange={(e) => {
                          setDisabilityType(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="email"
                        name="email"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        placeholder="Disability Type"
                        id="logemail"
                        autocomplete="off"
                        value={disabilityType}
                        onChange={(e) => {
                          setDisability(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Disability"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusDisability ? transcript : disability}
                        onFocus={fifteenSignUp}
                        onKeyDown={(e) => sixteenSignUp(e)}
                        onChange={(e) => {
                          setDisability(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Disability"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={disability}
                        onChange={(e) => {
                          setDisability(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Severity"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={onFocusSeverity ? transcript : severity}
                        onFocus={seventeenSignUp}
                        onKeyDown={(e) => eighteenSignUp(e)}
                        onChange={(e) => {
                          setDisability(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Severity"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={severity}
                        onChange={(e) => {
                          setSeverity(e.target.value);
                        }}
                      />
                    )}
                    {voiceFill ? (
                      <input
                        type="text"
                        placeholder="Job Preference"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={
                          onFocusJobPreference ? transcript : jobPreference
                        }
                        onFocus={nineteenSignUp}
                        onKeyDown={(e) => twentySignUp(e)}
                        onChange={(e) => {
                          setJobPreference(e.target.value);
                        }}
                      />
                    ) : (
                      <input
                        type="text"
                        placeholder="Job Preference"
                        className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                        style={{ marginBottom: '10px' }}
                        value={jobPreference}
                        onChange={(e) => {
                          setJobPreference(e.target.value);
                        }}
                      />
                    )}
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div className="flex">
                        <button
                          className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                          onClick={firstTrue}
                        >
                          Previous
                        </button>
                      </div>
                      <div className="flex">
                        <button
                          className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                          onClick={secondFalse}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              {third ? (
                <div>
                  {voiceFill ? (
                    <input
                      type="text"
                      placeholder="Qualification"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={onFocusQualification ? transcript : qualification}
                      onFocus={twentyOneSignUp}
                      onKeyDown={(e) => twentyTwoSignUp(e)}
                      onChange={(e) => {
                        setQualification(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Qualification"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={qualification}
                      onChange={(e) => {
                        setQualification(e.target.value);
                      }}
                    />
                  )}
                  {voiceFill ? (
                    <input
                      type="text"
                      placeholder="Sector"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={onFocusSector ? transcript : sector}
                      onFocus={twentythreeSignUp}
                      onKeyDown={(e) => twentyfourSignUp(e)}
                      onChange={(e) => {
                        setSector(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Sector"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={sector}
                      onChange={(e) => {
                        setSector(e.target.value);
                      }}
                    />
                  )}
                  {voiceFill ? (
                    <input
                      type="text"
                      placeholder="Place Preference"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={
                        onFocusPlacePreference ? transcript : placePreference
                      }
                      onFocus={twentyfiveSignUp}
                      onKeyDown={(e) => twentySixSignUp(e)}
                      onChange={(e) => {
                        setPlacePreference(e.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Place Preference"
                      className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                      style={{ marginBottom: '10px' }}
                      value={placePreference}
                      onChange={(e) => {
                        setPlacePreference(e.target.value);
                      }}
                    />
                  )}
                  <input
                    type="text"
                    placeholder="Resume"
                    className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                    style={{ marginBottom: '10px' }}
                  />
                  <input
                    type="text"
                    placeholder="Disability Certificate"
                    className="w-full border border-primary-lightest placeholder-primary-lightest text-sm font-semibold py-3 px-6 bg-transparent rounded-lg"
                    style={{ marginBottom: '10px' }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div className="flex">
                      <button
                        className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                        onClick={secondTrue}
                      >
                        Previous
                      </button>
                    </div>
                    <div className="flex">
                      <button
                        onClick={jobApplicationSubmit}
                        className="mt-2 px-6 py-3 bg-accent-gradient rounded-lg text-primary font-semibold ml-auto"
                      >
                        Submit Application
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </section>
          </div>
        </main>
        <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/1000px-World_map_blank_without_borders.svg.png"
            className="opacity-7 h-full w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default JobApplicationForm;
