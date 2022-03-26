import { useEffect, useState } from 'react';
import './GovernmentSchemeCard.css';

function GovernmentSchemeCard({ scheme }) {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          <h3 class="heading__title">Added Schemes</h3>
        </div>
        {scheme && (
          <div class="cards">
            {scheme.map((s) => {
              return (
                <div class="card card-3">
                  <p class="card__exit">
                    <i class="fas fa-times"></i>
                  </p>
                  <h4 class="card__title">{s.scheme_name}</h4>
                  <h4 class="card__title">{s.scheme_description}</h4>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default GovernmentSchemeCard;
