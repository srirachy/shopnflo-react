import React from 'react';
import { Link } from 'react-router-dom';

const NaviBar = () => {
    return ( 
        <>
        <nav className="navbar navbar-expand-sm navbar-light bg-satin-linen">
              <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="img/logo.webp" alt="logo" className="nav-logo-img" />
                </Link>
                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-light-taupe" to="/stores">Stores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light-taupe" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light-taupe" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <span>
                        <button type="button" className="btn btn-light-taupe btn-md" data-bs-toggle="modal" data-bs-target="#modalId">
                            Login
                        </button>
                        
                        <div className="modal fade text-dark" id="modalId" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
                            role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modalTitleId">Login</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3">
                                                <label htmlFor="username" className="form-label">Email</label>
                                                <input type="email" className="form-control" name="username" id="modal-username"
                                                    placeholder="abc@mail.com" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="pw" className="form-label">Password</label>
                                                <input type="password" className="form-control" name="pw" id="modal-pw" placeholder="" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer d-flex justify-content-center">
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
          </div>
        </nav>
        </>
     );
}
 
export default NaviBar;