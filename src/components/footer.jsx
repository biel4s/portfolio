import React from 'react';
import github from '../images/github.png'

export default function Footer() {
    return (
        <div className="footer">
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