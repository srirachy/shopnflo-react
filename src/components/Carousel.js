import React from 'react';
import CarouselIndicator from './CarouselIndicator';
import CarouselItem from './CarouselItem';

const Carousel = ({data}) => {
  return (
    <div
      id="carouselHome"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        {data.map((_, i) => {
          return <CarouselIndicator key={`indicator-${i + 1}`} slideNum={i}/>
        })}
      </div>
      <div className="carousel-inner">
        {data.map(({id, imgSrc, imgAlt, title, content}, i) => {
          return <CarouselItem key={id} imgSrc={imgSrc} imgAlt={imgAlt} title={title} content={content} index={i}/>
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselHome"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
