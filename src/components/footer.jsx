import React from 'react';
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import facebook from '../images/facebook.png'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer">
            <div className="footer-top">
                <h4>ABOUT</h4>
                <h4>PROJECTS</h4>
                <h4>CONTACT</h4>
            </div>
            <div className="footer-bottom">
                <div className="footer-text">
                    <span>© Copyright {currentYear} - Kamil Bielawski</span>
                </div>
                <div className="footer-icons">
                    <a href="https://github.com/biel4s" target="_blank" rel="noreferrer">
                        <img src={github} alt="github" className="link" id="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/kamil-bielawski" target="_blank" rel="noreferrer">
                        <img src={linkedin} alt="linkedin" className="link" id="linkedin"/>
                    </a>
                    <a href="https://www.facebook.com/biel4s" target="_blank" rel="noreferrer">
                        <img src={facebook} alt="facebook" className="link" id="facebook"/>
                    </a>
                </div>
            </div>
        </div>
    )
}