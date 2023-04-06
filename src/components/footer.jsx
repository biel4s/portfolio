import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';

export default function Footer() {
    return (
        <div className="footer">
            <div className="icons">
                <FontAwesomeIcon icon={faCoffee} className="icon"/>
                <FontAwesomeIcon icon={faCoffee} className="icon"/>
                <FontAwesomeIcon icon={faCoffee} className="icon" />
            </div>
        </div>
    )
}