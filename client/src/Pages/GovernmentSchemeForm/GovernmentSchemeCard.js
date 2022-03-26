import { useEffect, useState } from 'react';
import './GovernmentSchemeCard.css';

function GovernmentSchemeCard({ scheme }) {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          <h3 class="heading__title">Added Schemes</h3>
        </div>
        <table class="table">
          <thead style={{color:"white"}}>
            <tr>
              <th>Contact ID</th>
              <th>Power</th>
              <th>Expiration</th>
              <th>Value</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {scheme.map((s) => {
              return (
                <tr style={{color:"white"}}>
                  <td data-label="Contact ID">{s.scheme_name}</td>
                  <td data-label="Power">{s.scheme_description}</td>
                  <td data-label="Expiration">{s.authority_name}</td>
                  <td data-label="Value">{s.scheme_type}</td>
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

export default GovernmentSchemeCard;
