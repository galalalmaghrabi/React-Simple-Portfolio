import React from 'react';
import './About.css';  

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="about-image">
                    <img src="/images/profile2.jpeg" alt="Galal Almaghrabi" />
                </div>
                <div className="about-info">
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm <strong>Galal Almaghrabi</strong>, a passionate web developer with experience in building responsive and dynamic websites. I specialize in front-end development, focusing on delivering user-friendly interfaces with modern technologies like React, JavaScript, and CSS.
                    </p>
                    <p>
                        I have a strong background in coding and love solving challenging problems. In addition to my technical skills, I also have experience working in teams and collaborating with clients to create web applications that meet their needs.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
