import React from "react";

const Contact = () => {
  return (
    <main className="d-flex justify-content-center align-items-center my-5">
      <div className="container d-flex flex-column flex-md-row border border-secondary page-transparent p-3">
        <div className="container mb-4 mb-md-0">
          <div className="container d-flex justify-content-center align-items-center p-2">
            <div className="container icons contact-icon rounded-circle bg-secondary d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
              </svg>
            </div>
            <div className="container contact-info">
              <p>
                <b>Office Address</b>
              </p>
              <p>12345 Meow Avenue, Mewo, MW 98765</p>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center p-2">
            <div className="container icons contact-icon rounded-circle bg-secondary d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
            <div className="container contact-info">
              <p>
                <b>Phone & Fax</b>
              </p>
              <p>
                Phone: 123-456-7890
                <br />
                Fax: 111-222-3333
              </p>
            </div>
          </div>
          <div className="container d-flex justify-content-center align-items-center p-2">
            <div className="container icons contact-icon rounded-circle bg-secondary d-flex justify-content-center align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <div className="container contact-info">
              <p>
                <b>Email</b>
              </p>
              <p>
                <a href="mailto:someone@example.com">info@shopnflo.com</a>
                <br />
                <span>Hours of operation: By appointment</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container">
            <h1>Send Us a Message</h1>
          </div>
          <div className="container">
            <form>
              <div className="mb-3">
                <label for="firstname" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstname"
                  id="inputFirstName"
                  placeholder="Jane"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="lastname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastname"
                  id="inputLastName"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="telenum" className="form-label">
                  Telephone
                </label>
                <input
                  type="telephone"
                  className="form-control"
                  name="telenum"
                  id="inputTele"
                  aria-describedby="teleHelpId"
                  placeholder="999-888-7777"
                  required
                />
                <small id="teleHelpId" className="form-text text-muted">
                  Format: 999-888-7777
                </small>
              </div>
              <div className="mb-3">
                <label for="mail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="mail"
                  id="inputEmail"
                  placeholder="abc@mail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="inputMessage"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
