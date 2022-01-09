import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className=" footer  py-5 mt-5">

            <div className="justify-content-center row">


                <div className="col-2">
                    <h5>Services</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Emergency Dental Care</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Check up</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Treatment of Personal Diseases</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">FAQs</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
                    </ul>
                </div>



                <div className="col-4 offset-1">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of whats new and exciting from us.</p>
                        <div className="d-flex w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                            <button className="btn btn-primary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="d-flex justify-content-center py-4 my-4 border-top">
                <p>&copy; {(new Date()).getFullYear()} All rights reserved.</p>

            </div>
        </footer>
    );
};

export default Footer;