import React from 'react';
import mockup from '../images/mockup.png'
import github from '../images/github.png'
import netlify from '../images/netlify.png'


export default function Project(props) {
    const projectStyle = {
        textAlign: props.position === "left" ? "end" : "start",
        justifyContent: props.position === "left" ? "flex-end" : "flex-start",
    };

    const content = props.position === "left" ? (   // IF POSITION IS LEFT
        <div className="project-content" >
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="700" />
                    <img src={props.preview} alt="preview" className="preview" />
                </div>
                <div className="project-description" style={projectStyle}>
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom" style={projectStyle}>
                        <div style={{marginRight: "30px"}}>
                            <a href={props.github} target="_blank" rel="noreferrer">
                                <img src={github} alt="github" className="link"/>
                            </a>
                            <a href={props.netlify} target="_blank" rel="noreferrer">
                                <img src={netlify} alt="netlify" className="link" />
                            </a>
                        </div>
                        <span>{props.technology1}</span>
                        <span>{props.technology2}</span>
                        {props.technology3 ? (
                            <span style={{paddingLeft: "10px"}}>{props.technology3}</span>
                            ) : null }
                    </div>
                </div>
            </div>
    ) : (   // IF POSITION IS SOMETHING ELSE (RIGHT)
        <div className="project-content" >
                <div className="project-description" style={projectStyle}>
                    <h2>{props.title}</h2>
                    <p>{props.summary}</p>
                    <div className="description-bottom" style={projectStyle}>
                        <span>{props.technology1}</span>
                        <span>{props.technology2}</span>
                        {props.technology3 ? (
                            <span style={{paddingLeft: "10px"}}>{props.technology3}</span>
                            ) : null }
                        <div style={{marginLeft: "30px"}}>
                            <a href={props.github} target="_blank" rel="noreferrer">
                                <img src={github} alt="github" className="link"/>
                            </a>
                            <a href={props.netlify} target="_blank" rel="noreferrer">
                                <img src={netlify} alt="netlify" className="link" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-mockup">
                    <img src={mockup} alt="mockup" className="mockup" width="700" />
                    <img src={props.preview} alt="preview" className="preview" />
                </div>
        </div>
    );
    
return (
    <div className="project">
            {content}
    </div>
)}