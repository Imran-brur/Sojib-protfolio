import React from 'react';
import image from '../../../images/photo_2020-12-25_00-46-50.jpg';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 text-light align-self-center">
                    <h1>Hlw,</h1>
                    <h1> I am Sajib Shan</h1>
                    <h3>Graphics Designer & Freelancer </h3>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 text-md-center mt-5">
                    <img className="img-fluid " src={image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Header;