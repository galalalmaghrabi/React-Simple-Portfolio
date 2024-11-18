import React from 'react';
import './Projects.css'; // تأكد من ربط ملف الـ CSS بشكل صحيح

function Projects() {
    const projects = [
        {
            title: "E-commerce",
            description: "A brief description of the first project. This is a web application built with React.",
            imageUrl: "/images/project1.jpg",
            link: "#"
        },
        {
            title: "Blog",
            description: "Description of the second project. A mobile app developed with React Native.",
            imageUrl: "/images/project2.jpg",
            link: "#"
        },
        {
            title: "Portfolio",
            description: "A brief description of the third project. An API built using Node.js and Express.",
            imageUrl: "/images/project3.jpg",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-container">
                <h2>My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} className="project-link">View Project</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
