import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="#home">Logo</a>
            </div>
            <ul className="navbar-menu">
                <li className="navbar-item"><a href="#about">About</a></li>
                <li className="navbar-item"><a href="#projects">Projects</a></li>
                <li className="navbar-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;