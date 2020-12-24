import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import './Home.css'
import About from './About/About';

const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
        </div>
    );
};

export default Home;