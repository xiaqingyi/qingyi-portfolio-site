import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from "react-router-dom";

import "./App.css";
import Resume from "./Resume";
import Contact from "./Contact";
import MoveU from "./MoveUProject";
import ASL from "./ASLProject";
import DRL from "./TransformerDRLProject";
import Advize from "./AdvizeProject";
import CatClickerGame from "./CatSnakeGame";

import pic1 from "./pics/IMG_11.JPG";
import pic2 from "./pics/IMG_1810.JPG";
import pic3 from "./pics/IMG_2327.JPG";
import pic4 from "./pics/IMG_4731.JPG";
import pic5 from "./pics/IMG_2.jpg";

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-content">
                    <img src={pic1} alt="Qingyi" className="profile-img" loading="lazy" />
                    <h1 className="title">Welcome to Qingyi Xia's Web 🍒</h1>
                    <div className="intro">
                        <p>
                            I'm a software developer and engineer. I hold a Master's in Machine Learning and a Bachelor's
                            in Industrial Engineering with a minor in AI from the University of Toronto. With hands-on
                            experience in both industry and research, I've built secure health-tech platforms, visual
                            analytics dashboards, award-winning mobile apps, web designs, and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="gallery-section">
                <h2 className="section-title">My Journey</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src={pic2} alt="Gallery 1" loading="lazy" />
                    </div>
                    <div className="gallery-item">
                        <img src={pic3} alt="Gallery 2" loading="lazy" />
                    </div>
                    <div className="gallery-item">
                        <img src={pic4} alt="Gallery 3" loading="lazy" />
                    </div>
                    <div className="gallery-item">
                        <img src={pic5} alt="Gallery 4" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
}

function MainApp() {
    const location = useLocation();
    const isProjectPage = location.pathname.startsWith("/projects");

    const [mobileOpen, setMobileOpen] = useState(false);
    const [projectsOpen, setProjectsOpen] = useState(false);

    // Close menus on route change
    useEffect(() => {
        setMobileOpen(false);
        setProjectsOpen(false);
    }, [location.pathname]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (projectsOpen && !e.target.closest('.has-dropdown')) {
                setProjectsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [projectsOpen]);

    return (
        <div className="App">
            <header className="topbar">
                <nav className="top-nav" aria-label="Primary">
                    <div className="brand">
                        <button
                            className={`burger ${mobileOpen ? "open" : ""}`}
                            aria-label="Toggle menu"
                            aria-expanded={mobileOpen}
                            aria-controls="primary-menu"
                            onClick={() => setMobileOpen(o => !o)}
                        >
                            <span className="burger-line" />
                            <span className="burger-line" />
                            <span className="burger-line" />
                        </button>
                    </div>

                    <ul id="primary-menu" className={`menu ${mobileOpen ? "open" : ""}`}>
                        <li><NavLink to="/" end>Home</NavLink></li>

                        <li className={`has-dropdown ${isProjectPage ? "active" : ""}`}>
                            <button
                                className="dropbtn"
                                aria-expanded={projectsOpen}
                                onClick={() => setProjectsOpen(o => !o)}
                            >
                                Projects
                                <span className={`chev ${projectsOpen ? "up" : ""}`} aria-hidden>▾</span>
                            </button>
                            <ul className={`dropdown ${projectsOpen ? "show" : ""}`}>
                                <li><NavLink to="/projects/moveu">MoveU.HappyU</NavLink></li>
                                <li><NavLink to="/projects/asl">ASL Recognition</NavLink></li>
                                <li><NavLink to="/projects/drl">Transformer-DRL Portfolio Optimizer</NavLink></li>
                                <li><NavLink to="/projects/advize">AdVize Ads Pushing Algorithms</NavLink></li>
                            </ul>
                        </li>

                        <li><NavLink to="/resume">Resume</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li><NavLink to="/cat-game">Cat Game 🐾</NavLink></li>
                    </ul>
                </nav>
            </header>

            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects/moveu" element={<MoveU />} />
                    <Route path="/projects/asl" element={<ASL />} />
                    <Route path="/projects/drl" element={<DRL />} />
                    <Route path="/projects/advize" element={<Advize />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cat-game" element={<CatClickerGame />} />
                </Routes>
            </main>
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