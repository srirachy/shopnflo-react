import React from 'react';

const CarouselIndicator = ({slideNum}) => {
  const ariaLabel = `Slide ${slideNum+1}`;
  return (
    <>
      {slideNum == 0 ? (
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to={slideNum}
          className="active"
          aria-current="true"
          aria-label={ariaLabel}
        ></button>
      ) : (
        <button
          type="button"
          data-bs-target="#carouselHome"
          data-bs-slide-to={slideNum}
          aria-label={ariaLabel}
        ></button>
      )}
    </>
  );
}
 
export default CarouselIndicator;