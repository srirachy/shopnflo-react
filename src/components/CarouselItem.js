import React from 'react';

const CarouselItem = ({ imgSrc, imgAlt, title, content, index }) => {
  const itemClass = (index == 0) ? "carousel-item active" : "carousel-item";
  
  return (
    <div className={itemClass}>
      <img src={imgSrc} className="d-block w-100" alt={imgAlt} />
      <div className="carousel-caption d-none d-md-block carousel-caption-transparent">
        <h2>
          <em>{title}</em>
        </h2>
        <p>{content}</p>
      </div>
    </div>
  );
};
 
export default CarouselItem;