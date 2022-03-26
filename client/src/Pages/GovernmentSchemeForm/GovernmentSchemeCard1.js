import { useEffect, useState } from 'react';
import './GovernmentSchemeCard.css';

function GovernmentSchemeCard1({ scheme }) {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          <h3 class="heading__title">Added Jobs</h3>
        </div>
        <table class="table">
          <thead style={{ color: 'white' }}>
            <tr>
              <th>Title</th>
              <th>Salary</th>
              <th>Description</th>
              <th>Location</th>
              <th>Sector</th>
              <th>Disability</th>
              <th>Qualification</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {scheme.map((s) => {
              return (
                <tr style={{ color: 'white' }}>
                  <td data-label="Contact ID">{s.title}</td>
                  <td data-label="Value">{s.salary}</td>
                  <td data-label="Power">{s.description}</td>
                  <td data-label="Expiration">{s.location}</td>
                  <td data-label="Expiration">{s.sector}</td>
                  <td data-label="Expiration">{s.disability}</td>
                  <td data-label="Expiration">{s.qualification}</td>
                  <td data-label="Expiration">{s.company_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {scheme && <div class="cards"></div>}
      </div>
    </div>
  );
}

export default GovernmentSchemeCard1;
