import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel CSS
import { img } from "./img/data"; // Assuming img is an array of image paths
import "./CarouselEffect.css"; // Custom CSS

function CarouselEffect() {
  return (
    <div className="carousel-container">
      <ReactCarousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItem, index) => (
          <div key={index} className="carousel-slide">
            <img src={imageItem} alt={`carousel-item-${index}`} />
            <div className="gradient-overlay"></div>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
}

export default CarouselEffect;
