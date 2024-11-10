'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    '/picture/car1.png',
    '/picture/car2.png',
    '/picture/car3.png',
    '/picture/car4.png',
    '/picture/car5.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <button className="arrow prev" onClick={prevSlide}>
          &#10094;
        </button>
        <Image
          src={images[currentIndex]}
          alt="slider"
          className="slider-image"
        />
        <button className="arrow next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
