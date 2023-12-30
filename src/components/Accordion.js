import React from 'react';

const Accordion = () => {
  return (
    <>
      <div className="accordion mb-5" id="accordionAbout">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Our Mission
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <em>Empowering Sellers, Delighting Shoppers.</em>
              <p>
                shopnflo is on a mission to revolutionize the way people buy and
                sell online. We are committed to providing a platform that
                fosters creativity, encourages entrepreneurship, and connects
                buyers with one-of-a-kind products.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Our Story
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <p>
                Established in 2023, shopnflo was born out of a passion for
                supporting small businesses and individual creators. We've come
                a long way since our inception, growing into a vibrant community
                where sellers can turn their passions into thriving online
                businesses.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              The shopnflo Experience
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <b>User-Friendly Interface:</b>
              <p>
                Navigating our platform is a breeze. List your products, manage
                your inventory, and connect with buyers effortlessly through our
                intuitive interface.
              </p>
              <b>Your Store, Your Way:</b>
              <p>
                Customize your storefront to reflect your brand. Showcase your
                products with stunning visuals and personalized descriptions to
                make a lasting impression.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Meet the Team
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <p>
                Behind shopnflo is a dedicated team of individuals who are
                passionate about fostering a vibrant marketplace. Get to know
                the faces driving our mission and ensuring your experience is
                nothing short of exceptional.
              </p>
              <ul>
                <li>
                  Founder and CEO: Meow Meow
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quos ratione officiis dolore quisquam perspiciatis
                      deserunt debitis incidunt accusantium esse consequuntur,
                      iure ipsam sed, cumque commodi eveniet ducimus omnis quasi
                      aliquam!
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  Chief Product Officer: Woof Woof
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quos ratione officiis dolore quisquam perspiciatis
                      deserunt debitis incidunt accusantium esse consequuntur,
                      iure ipsam sed, cumque commodi eveniet ducimus omnis quasi
                      aliquam!
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  Head of Customer Support: Bawk Bawk
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quos ratione officiis dolore quisquam perspiciatis
                      deserunt debitis incidunt accusantium esse consequuntur,
                      iure ipsam sed, cumque commodi eveniet ducimus omnis quasi
                      aliquam!
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Join the shopnflo Community
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <p>
                At shopnflo, we're not just building a platform; we're building
                a community. Join us in celebrating creativity, supporting local
                businesses, and discovering unique products that tell a story.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Contact Us
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <p>
                Have questions or feedback? We'd love to hear from you! Reach
                out to our support team at <a href="mailto:someone@example.com">support@shopnflo.com</a> or
                visit our <a href="contact.html" target="_blank">Contact Page</a>.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header collapsed" id="headingEight">
            <button
              className="accordion-button collapsed bg-satin-linen text-light-taupe"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              Start Selling, Start Shopping - shopnflo.
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionAbout"
          >
            <div className="accordion-body">
              <div>
                <button
                  type="button"
                  className="btn btn-light-taupe text-satin-linen btn-md m-2"
                  data-bs-toggle="modal"
                  data-bs-target="#modalIdTwo"
                >
                  Sign Up Now
                </button>
                <div
                  className="modal fade"
                  id="modalIdTwo"
                  tabIndex="-1"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  role="dialog"
                  aria-labelledby="modalTitleId"
                  aria-hidden="true"
                >
                  <div
                    className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                    role="document"
                  >
                    <div className="modal-content">
                      <div className="modal-header">
                        <h3 className="modal-title" id="modalTitleId">
                          Sign Up
                        </h3>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="su-name"
                            aria-describedby="helpId"
                            placeholder="Jane Doe"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="mail" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            name="mail"
                            id="su-email"
                            placeholder="abc@mail.com"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="pass" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="pass"
                            id="su-pw"
                            placeholder="***********"
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="word" className="form-label">
                            Confirm Password
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="word"
                            id="su-vpw"
                            aria-describedby="helpId"
                            placeholder="password123"
                            required
                          />
                        </div>
                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                        >
                          Sign Up
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="stores.html">
                  <button
                    type="button"
                    className="btn btn-light-taupe text-satin-linen btn-md m-2"
                  >
                    Explore Our Marketplace
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
