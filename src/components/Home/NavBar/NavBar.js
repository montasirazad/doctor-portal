import React from 'react';
import './NavBar.css'


const NavBar = () => {
    return (


        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link me-5 text-dark" href="#">Home</a>
                        </li>

                       
                        <li class="nav-item">
                            <a class="nav-link me-5 text-dark" href="#">About</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Dental services</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Reviews</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Blog</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link me-5 text-white" href="#">Contact Us</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>


    );
};

export default NavBar;