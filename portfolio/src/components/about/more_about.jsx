import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/more_about.css';

// Import images directly (adjust paths according to your structure)
import art from '../../assets/images/carousel/art.JPG';
import camping from '../../assets/images/carousel/camping.JPG';
import cat from '../../assets/images/carousel/cat.JPG';
import travel from '../../assets/images/carousel/travel.JPG';
import food from '../../assets/images/carousel/food.png';

const More_About = () => {
  const images = [art, camping, cat, travel, food];

  const settings = {
    className: 'center',
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '0'
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  };

  return (
    <div className="cacarousel-subtitlerousel-wrapper">
      <div className="carousel-container">
        <div className="carousel-subtitle">more about me</div>
        <h2 className="carousel-title">WHAT I LIKE TO DO?</h2>
        <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="slide-container">
              <div className="image-container">
                <img 
                  src={src} 
                  alt={`Activity ${index + 1}`} 
                  className="carousel-image"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default More_About;