import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import './HomePage.css';
import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import 'react-slideshow-image/dist/styles.css';
import pic1 from './Assets/banner_1.jpg';
import pic2 from './Assets/banner_2.jpg';
import pic3 from './Assets/banner_3.jpg';
import pic4 from './Assets/banner_4.jpg';
const slideImages = [
  {
    // image:'./Assets/banner_1.jpg',
    url: 'http://static.businessworld.in/article/article_extra_large_image/1632564416_Jzk0PW_sabka_saath_sab_ka_wikas.jpg',
    caption: 'Slide 1',
  },
  {
    url: 'https://img.theweek.in/content/dam/week/news/india/images/2020/7/4/modi-video-party-workers-pti.jpg',
    caption: 'Slide 2',
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Slide 3',
  },
];
function HomePage() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={pic1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pic4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;
