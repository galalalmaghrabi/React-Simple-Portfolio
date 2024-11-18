import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflowY = "hidden";  // Disable vertical scrolling
        } else {
            document.body.style.overflowY = "auto";  // Enable vertical scrolling
        }
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);

    }, [])
    return (
        <header className="header">
            <div className="logo">Galal Almaghrabi</div>
            <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            {isMenuOpen ? <span className="close-icon" onClick={toggleMenu}>X</span> : <div className="hamburger" onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>}
        </header>
    );
}

export default Header;
