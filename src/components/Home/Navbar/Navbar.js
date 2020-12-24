import React from 'react';
import logo from '../../../images/photo_2020-12-25_00-13-41.jpg';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <img className="img-fluid rounded-circle" style={{width: "80px"}}  src={logo} alt=""/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-center justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="link nav-link text-light p-3 mr-5" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="link nav-link text-light p-3 mr-5" href="#about">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="link nav-link text-light p-3 mr-5" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="link nav-link text-light p-3 mr-5" href="#contact">Contact Me</a>                    </li>
                    
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;