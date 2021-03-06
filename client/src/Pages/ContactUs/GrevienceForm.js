import './GrevienceForm.css';
import { post } from 'axios';
import { useState } from 'react';

function GrevienceForm() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [contactNumber, setContactNumber] = useState('');
  let [grevience, setGrevience] = useState('');

  async function submitGrevience() {
    console.log(name);
    console.log(email);
    console.log(contactNumber);
    console.log(grevience);
    const baseurl = 'https://reachout-sql-server.herokuapp.com';
    const { data } = await post(
      `${baseurl}/grievance/post-grievance`,
      {
        authority: contactNumber,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      },
    );
  }

  return (
    <div>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-left">
                <div class="screen-header-button close"></div>
                <div class="screen-header-button maximize"></div>
                <div class="screen-header-button minimize"></div>
              </div>
              <div class="screen-header-right">
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
                <div class="screen-header-ellipsis"></div>
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div class="app-contact">CONTACT INFO : reachout@gmail.com</div>
              </div>
              <div class="screen-body-item">
                <div class="app-form">
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      placeholder="Authority"
                      value={contactNumber}
                      onChange={(e) => {
                        setContactNumber(e.target.value);
                      }}
                    />
                  </div>
                  <div class="app-form-group message">
                    <input
                      class="app-form-control"
                      placeholder="Grevience"
                      value={grevience}
                      onChange={(e) => {
                        setGrevience(e.target.value);
                      }}
                    />
                  </div>
                  <div class="app-form-group buttons">
                    <button onClick={submitGrevience} class="app-form-button">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="credits">
            inspired by
            <svg class="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  stroke-width="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  stroke-width="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  stroke-width="20"
                ></path>
              </g>
            </svg>
            ReachOut
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrevienceForm;
