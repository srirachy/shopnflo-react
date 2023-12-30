import React from "react";

const GalleryItem = ({title, stores}) => {
  return (
    <div className="container mb-3">
      <div className="container text-center text-md-start ms-md-4">
        <h2>{title}</h2>
      </div>
      <div className="container">
        <div className="container d-flex flex-column flex-md-row">
          {stores.map((store) => {
            return (
              <div key={store.id} className="container mb-2 mb-md-0">
                <a href={store.link} target="_blank">
                  <img
                    src={store.imgSrc}
                    className="img-thumbnail img-hover"
                    alt={store.imgAlt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
