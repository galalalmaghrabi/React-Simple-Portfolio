import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Galal Almaghrabi. All Rights Reserved. Designed with ❤️</p>
        </footer>
    );
}

export default Footer;
