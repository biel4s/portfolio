import React from 'react';
import logo from '../images/logo-white.png'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} width="100" height="60"/>
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