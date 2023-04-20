import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/fontawesome-free-solid';
import mockup from '../images/mockup.png'


export default function Project(props) {
    let content;
    const projectStyle = {
        textAlign: props.position === "left" ? "end" : "start",
        justifyContent: props.position === "left" ? "flex-end" : "flex-start"
    };

    if (props.position === "left") {
        content = (
            <div className="project-content" >
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="800" />
                    <img src={props.preview} alt="preview" className="preview" width="800" />
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
        );
    }
    else if (props.position === "right") {
        content = (
            <div className="project-content" >
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
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="800" />
                    <img src={props.preview} alt="preview" className="preview" width="800" />
                </div>
            </div>
        );
    }

return (
    <div className="project" style={projectStyle}>
            {content}
    </div>
)}