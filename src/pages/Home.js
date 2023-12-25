import React from 'react';

const Home = () => {
  return (
    <main className="d-flex justify-content-center align-items-center my-5">
      <div className="container border border-secondary page-transparent">
        <div className="container p-3 text-center text-lg-start">
          <h1>What's New</h1>
        </div>
        <div className="container mb-5">
          <div
            id="carouselHome"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHome"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="img/best-product-2023.webp"
                  className="d-block w-100"
                  alt="Image of Best Product 2023"
                />
                <div className="carousel-caption d-none d-md-block carousel-caption-transparent">
                  <h2>
                    <em>Best Product of 2023</em>
                  </h2>
                  <p>It's a drone! Made by a store from the toy department.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/best-store-2023.webp"
                  className="d-block w-100"
                  alt="Image of Best Store 2023"
                />
                <div className="carousel-caption d-none d-md-block carousel-caption-transparent">
                  <h2>
                    <em>Best Store of 2023</em>
                  </h2>
                  <p>
                    Congratulations to home decoration seller for having the
                    best store of 2023!
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="img/delivery.webp"
                  className="d-block w-100"
                  alt="Image of Delivery Service"
                />
                <div className="carousel-caption d-none d-md-block carousel-caption-transparent">
                  <h2>
                    <em>Free Delivery for The Holidays</em>
                  </h2>
                  <p>
                    Any order will be covered by us so that you could receive
                    your order from any seller!
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselHome"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
 
export default Home;