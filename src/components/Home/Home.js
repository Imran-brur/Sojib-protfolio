import React from 'react';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import './Home.css'
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div className="container">
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;