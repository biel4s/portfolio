import React from 'react';
import logo from '../images/logo-white.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header-left">
                <img src={logo} className="logo" width="70" height="57" alt="logo" />
                <h2>KAMIL<span>BIELAWSKI</span></h2>
            </div>
            <div className="header-right">
                <ul>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}