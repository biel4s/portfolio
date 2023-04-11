import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import mockup from '../images/mockup.png'

export default function Project(props) {
    return (
        <div className="project">
            <div className="project-content">
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" width="800" />
                    <img src={props.preview} alt="preview" width="800" />
                </div>
                <div className="project-description">
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom">
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faCoffee} alt="github" className="github" />
                        </a>
                        <span>{props.technology}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}