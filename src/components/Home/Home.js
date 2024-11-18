import React from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(/images/profile.jpeg)` }}>
            <div className="home-content">
                <h1>
                    Hello! I'm
                    <TypeAnimation
                        sequence={[
                            ' Galal Almaghrabi',
                            2500, 
                            ' Web Developer',
                            2500,
                            ' Mern Stack',
                            2500
                        ]}
                        wrapper="span"
                        speed={50}

                        repeat={Infinity}
                    />
                </h1>
                <p>I am a web developer, passionate about programming and working on tech projects.</p>
                <button className="contact-btn">Contact Me</button>
            </div>
        </div>
    );
}

export default Home;
