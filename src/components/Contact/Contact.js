import React, { useState } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser'
function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm(
            'service_g23ml6c',
            'template_aefxzyk',
            e.target,
            {
                publicKey: 'wZPW_-TKSmj4K1CF2',
            }
        ).then(success => {
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setStatus('Message Was Send !');
        }).catch(error => {
            setFormData({
                name: "",
                email: "",
                message: ""
            })
            setStatus('Send Failed !');
        })
    }

    return (
        <section id="contact" className="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>Feel free to reach out if you have any questions or just want to say hello!</p>

                {/* Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit}>
                {status && <p className={`status-message ${status.includes('Message') ? 'success' : 'error'}`}>{status}</p>} 
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon tiktok"><i class="fa-brands fa-tiktok"></i></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
