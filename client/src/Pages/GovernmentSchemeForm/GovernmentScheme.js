import './GovernmentScheme.css';
import { useState } from 'react';

function GovernmentScheme() {
  let [schemeName, setSchemeName] = useState('');
  let [schemeType, setSchemeType] = useState('');
  let [schemeLink, setSchemeLink] = useState('');
  let [schemeDescription, setSchemeDescription] = useState('');

  function submitScheme(e) {
    e.preventDefault();
    console.log(schemeName);
    console.log(schemeType);
    console.log(schemeLink);
    console.log(schemeDescription);
  }

  return (
    <div>
      <div className="container">
        <form id="contact" action="" method="post">
          <h3>Quick Contact</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <input
              placeholder="Scheme Name"
              type="email"
              tabindex="2"
              value={schemeName}
              onChange={(e) => {
                setSchemeName(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Scheme Type"
              type="tel"
              tabindex="3"
              value={schemeType}
              onChange={(e) => {
                setSchemeType(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Scheme Link"
              type="url"
              tabindex="4"
              value={schemeLink}
              onChange={(e) => {
                setSchemeLink(e.target.value);
              }}
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Scheme Description"
              tabindex="5"
              value={schemeDescription}
              onChange={(e) => {
                setSchemeDescription(e.target.value);
              }}
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
              onClick={submitScheme}
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default GovernmentScheme;
