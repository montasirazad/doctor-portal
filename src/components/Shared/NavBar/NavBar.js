import React from 'react';
import './NavBar.css'


const NavBar = () => {
    return (


        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">Home</a>
                        </li>

                       
                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">Services</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">Reviews</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">Blog</a>
                        </li>


                        <li className="nav-item">
                            <a className="nav-link me-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


    );
};

export default NavBar;