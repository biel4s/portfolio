import React from 'react';
import github from '../images/github.png'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <div className="footer">
            <div className="footer-text">
                <span>© Copyright {currentYear} - Kamil Bielawski</span>
            </div>
            <div className="icons">
                <a href="https://github.com/biel4s" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className="link" id="github"/>
                </a>
                <a href="https://github.com/biel4s" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className="link" id="github"/>
                </a>
                <a href="https://github.com/biel4s" target="_blank" rel="noreferrer">
                    <img src={github} alt="github" className="link" id="github"/>
                </a>
            </div>
            
        </div>
    )
}