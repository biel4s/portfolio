import React from 'react';

export default function Contact() {
    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <p>Please don't hesitate to reach out to me by filling out the form below. I'll do my best to respond to you as soon as I can.</p>
            <div className="contact-form">
                <input placeholder="Enter Your Name" type="text" name="name" className="contact-input" required></input>
                <input placeholder="Enter Your Email" type="text" name="email" className="contact-input" required></input>
                <textarea placeholder="Enter Your Message" type="text" name="message" className="contact-input" required></textarea>
            </div>
            <button className="home-btn">
                Submit
            </button>
        </div>
    )
}