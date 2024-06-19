import React, {useEffect, useRef, useState} from "react";
import useIntersection from "../../hooks/useIntersection";
import Icon from "@mdi/react";
import {mdiGithub} from "@mdi/js";
import {mdiOpenInNew} from "@mdi/js";
import style from "./project.module.scss";

function ProjectLeft(props) {
    const refs = [useRef(), useRef()];
    const options = {rootMargin: "0px"};
    const isIntersecting = useIntersection(refs, options);
    return (
        <div className={style.content}>
            <div
                className={`${style.mockup} ${isIntersecting.includes(refs[0].current) ? style.show : style.hiddenLeft}`}
                ref={refs[0]}>
                <a href={props.netlify} target="_blank" rel="noreferrer">
                    <img src={props.preview} alt="preview" className={style.preview}/>
                </a>
            </div>
            <div
                className={`${style.description} ${isIntersecting.includes(refs[1].current) ? style.show : style.hiddenRight}`}
                style={props.projectStyle} ref={refs[1]}>
                <h2 className={style.title}>{props.title}</h2>
                <h4 className={style.year}>{props.year}</h4>
                <p className={style.paragraph}>{props.summary}</p>
                <div className={style.details} style={props.projectStyle}>
                    <div className={style.links} style={{marginRight: "15px"}}>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <Icon className={style.linkItem} path={mdiGithub} size={1.2}/>
                        </a>
                        <a href={props.netlify} target="_blank" rel="noreferrer">
                            <Icon className={style.linkItem} path={mdiOpenInNew} size={1.2}/>
                        </a>
                    </div>
                    <span className={style.technology}>{props.technology1}</span>
                    <span className={style.technology}>{props.technology2}</span>
                    {props.technology3 ? (<span className={style.technology}>
							{props.technology3}
						</span>) : null}
                </div>
            </div>
        </div>
    );
}

function ProjectRight(props) {
    const refs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const options = {rootMargin: "0px"};
    const isIntersecting = useIntersection(refs, options);
    return (
        <div className={style.content}>
            <div
                className={`${style.description} ${isIntersecting.includes(refs[0].current) ? style.show : style.hiddenLeft}`}
                style={props.projectStyle} ref={refs[0]}>
                <h2 className={style.title}>{props.title}</h2>
                <h4 className={style.year}>{props.year}</h4>
                <p className={style.paragraph}>{props.summary}</p>
                <div className={style.details} style={props.projectStyle}>
					<span className={style.technology}>
						{props.technology1}
					</span>
                    <span className={style.technology}>
						{props.technology2}
					</span>{props.technology3 ? (
                    <span className={style.technology}>
							{props.technology3}
						</span>) : null}
                    <div className={style.links} style={{marginLeft: "15px"}}>
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <Icon className={style.linkItem} path={mdiGithub} size={1.2}/>
                        </a>
                        <a href={props.netlify} target="_blank" rel="noreferrer">
                            <Icon className={style.linkItem} path={mdiOpenInNew} size={1.2}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={`${style.mockup} ${
                isIntersecting.includes(refs[4].current)
                    ? style.show
                    : style.hiddenRight}`}
                 ref={refs[4]}>
                <a href={props.netlify} target="_blank" rel="noreferrer">
                    <img src={props.preview} alt="preview" className={style.preview}/>
                </a>
            </div>
        </div>
    );
}

export default function Project(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const projectStyle = {
        textAlign: props.mockupPosition === "left" && windowWidth > 480 ? "end" : "start",
        justifyContent:
            props.mockupPosition === "left" && windowWidth > 480 ? "flex-end" : "flex-start",
    };

    const content =
        props.mockupPosition === "left" ? (
            <ProjectLeft {...props} projectStyle={projectStyle}/>
        ) : (
            <ProjectRight {...props} projectStyle={projectStyle}/>
        );

    return <div className={style.container}>{content}</div>;
}
