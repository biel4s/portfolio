import React from 'react';
import logo from '../images/logo-white.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} className="logo" width="50" height="40" alt="logo" />
                <h2>KAMIL<span>&nbsp;BIELAWSKI</span></h2>
            </div>
            <div className="header-right">
                <ul>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </header>
    )
}