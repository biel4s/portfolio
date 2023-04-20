import React from 'react';
import mockup from '../images/mockup.png'
import github from '../images/github.png'
import netlify from '../images/netlify.png'


export default function Project(props) {
    let content;
    const projectStyle = {
        textAlign: props.position === "left" ? "end" : "start",
        justifyContent: props.position === "left" ? "flex-end" : "flex-start"
    };

    if (props.position === "left") {    //mockup on the left side
        content = (
            <div className="project-content" >
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="700" />
                    <img src={props.preview} alt="preview" className="preview" />
                </div>
                <div className="project-description" style={projectStyle}>
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom" style={projectStyle}>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <img src={github} alt="github" className="link"/>
                        </a>
                        <a href={props.netlify} target="_blank" rel="noreferrer">
                            <img src={netlify} alt="netlify" className="link" />
                        </a>
                        <span>{props.technology1}</span>
                        <span>{props.technology2}</span>
                        <span>{props.technology3}</span>
                    </div>
                </div>
            </div>
        );
    }
    else if (props.position === "right") { //mockup on the right side
        content = (
            <div className="project-content" >
                <div className="project-description" style={projectStyle}>
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom" >
                        <span>{props.technology1}</span>
                        <span>{props.technology2}</span>
                        <span>{props.technology3}</span>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <img src={github} alt="github" className="link" id="github"/>
                        </a>
                        <a href={props.netlify} target="_blank" rel="noreferrer">
                            <img src={netlify} alt="netlify" className="link" id="netlify"/>
                        </a>
                    </div>
                </div>
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="700" />
                    <img src={props.preview} alt="preview" className="preview" />
                </div>
            </div>
        );
    }
    else {
        content = (
            <div className="project-content" >
                <div className="project-mockup">
                    
                </div>
            </div>
        );
    }

return (
    <div className="project">
            {content}
    </div>
)}