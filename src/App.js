import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from "react-router-dom";


import './App.css';
import Resume from './Resume';
import Contact from './Contact';
import MoveU from './MoveUProject';
import ASL from './ASLProject';
import CatClickerGame from './CatClickerGame';


import pic1 from './pics/IMG_11.JPG';
import pic2 from './pics/IMG_1810.JPG';
import pic3 from './pics/IMG_2327.JPG';
import pic4 from './pics/IMG_4731.JPG';
import pic5 from './pics/IMG_2.jpg';

function Home() {
    return (
        <div className="App-header">

            <img src={pic1} alt="Qingyi" className="profile-img" />
            <h1>Welcome to Qingyi Xia's Web 🍒</h1>

            <div className="intro">
                <p>
                    I'm a software developer and engineer. I hold a Master’s in Machine Learning and a Bachelor's
                    in Industrial Engineering with a minor in AI from the University of Toronto.
                    With hands-on experience in both industry and research, I’ve built secure health-tech platforms,
                    visual analytics dashboards, award-winning mobile apps, web designs, and more.
                </p>
            </div>

            <div className="gallery">
                <img src={pic2} alt="Gallery 1" />
                <img src={pic3} alt="Gallery 2" />
                <img src={pic4} alt="Gallery 3" />
                <img src={pic5} alt="Gallery 4" />
            </div>
        </div>
    );
}

function MainApp() {
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith('/projects');

    return (
        <div className="App">
            <nav className="top-nav">
                <NavLink to="/" end>Home</NavLink>
                <div className="dropdown">
                    <button className={`dropbtn ${isProjectPage ? 'active' : ''}`}>
                        Projects
                    </button>
                    <div className="dropdown-content">
                        <NavLink to="/projects/moveu">MoveU.HappyU</NavLink>
                        <NavLink to="/projects/asl">ASL Recognition</NavLink>
                    </div>
                </div>
                <NavLink to="/resume">Resume</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/cat-game">Cat Game 🐾</NavLink>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects/moveu" element={<MoveU />} />
                <Route path="/projects/asl" element={<ASL />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cat-game" element={<CatClickerGame />} />
            </Routes>
        </div>
    );
}

function AppWrapper() {
    return (
        <Router>
            <MainApp />
        </Router>
    );
}

export default AppWrapper;
