import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import mockup from '../images/mockup.png'

export default function Project(props) {
    return (
        <div className="project">
            <h2>Projects</h2>
            <div className="content">
                <div className="mockup">
                    <img src={mockup} alt="mockup" width="800" />
                </div>
                <div className="description">
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom">
                        <a href="https://github.com/biel4s/portfolio-react" target="_blank">
                            <FontAwesomeIcon icon={faCoffee} alt="github" className="github" />
                        </a>
                        <span>{props.technology}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}