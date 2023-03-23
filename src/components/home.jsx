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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis sagittis sodales. Fusce id lacinia risus, eu sodales nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <button className="btn">
                View my projects 
                <FontAwesomeIcon className="arrow" icon={ faArrowRight } />
            </button>
        </div>
    )
}