import './GovernmentSchemeCard.css';

function GovernmentSchemeCard() {
  return (
    <div>
      <div class="main-container">
        <div class="heading">
          <h1 class="heading__title">Government Schemes</h1>
          <p class="heading__credits">
            <a
              class="heading__link"
              target="_blank"
              href="https://dribbble.com/sl"
            ></a>
          </p>
        </div>
        <div class="cards">
          <div class="card card-3">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">Ut enim ad minim veniam.</h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-4">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Quis nostrud exercitation ullamco laboris nisi.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-5">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
          <div class="card card-1">
            <div class="card__icon">
              <i class="fas fa-bolt"></i>
            </div>
            <p class="card__exit">
              <i class="fas fa-times"></i>
            </p>
            <h2 class="card__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p class="card__apply">
              <a class="card__link" href="#">
                Apply Now <i class="fas fa-arrow-right"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GovernmentSchemeCard;
