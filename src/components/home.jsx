import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/fontawesome-free-solid';
//import myself from '../images/myself.png'

export default function Home() {
    return (
        <div className="home">
            <div className="content">
                <p>Hello, my name is</p>
                <h1>Kamil Bielawski</h1>
                <h3>Front-end developer</h3>
                <p>With a passion for creating beautiful, responsive websites and a dedication to learning the latest front-end technologies</p>
            </div>
            <button className="btn">
                View my projects 
                <FontAwesomeIcon className="arrow" icon={ faArrowRight }>::before</FontAwesomeIcon>
            </button>
        </div>
    )
}