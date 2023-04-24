import React, { useState } from 'react';

export default function Contact() {
    
    const [namePlaceholder, setNamePlaceholder] = useState("Enter Your Name");
    const [emailPlaceholder, setEmailPlaceholder] = useState("Enter Your Email");
    const [messagePlaceholder, setMessagePlaceholder] = useState("Enter Your Message");

    const handleNameFocus = () => {
        setNamePlaceholder("");
    };
    const handleNameBlur = (e) => {
        if (e.target.value === "") {
        setNamePlaceholder("Enter Your Name");
        }
    };

    const handleEmailFocus = () => {
        setEmailPlaceholder("");
    };
    const handleEmailBlur = (e) => {
        if (e.target.value === "") {
        setEmailPlaceholder("Enter Your Email");
        }
    };

    const handleMessageFocus = () => {
        setMessagePlaceholder("");
    };
    const handleMessageBlur = (e) => {
        if (e.target.value === "") {
        setMessagePlaceholder("Enter Your Message");
        }
    };
    
    return (
        <div className="contact">
            <h2 className="contact-title">Contact</h2>
            <p>Please don't hesitate to reach out to me by filling out the form below. I'll do my best to respond to you as soon as I can.</p>
            <form id="contact-form" autoComplete="off">
                <input placeholder={namePlaceholder} type="text" name="name" className="contact-input" onFocus={handleNameFocus} onBlur={handleNameBlur} required></input>
                <input placeholder={emailPlaceholder} type="text" name="email" className="contact-input" onFocus={handleEmailFocus} onBlur={handleEmailBlur} required></input>
                <textarea placeholder={messagePlaceholder} type="text" name="message" className="contact-input" onFocus={handleMessageFocus} onBlur={handleMessageBlur} required></textarea>
            </form>
            <button className="home-btn">
                Submit
            </button>
        </div>
    )
}