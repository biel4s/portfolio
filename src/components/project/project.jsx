import React, { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import mockup from "../../assets/images/mockup.png";
import style from "./project.module.scss";

function ProjecLeft(props) {
	const refs = [useRef(), useRef()];
	const options = { rootMargin: "-100px" };
	const isIntersecting = useIntersection(refs, options);

	return (
		<div className={style.content}>
			<div className={style.mockup}>
				<img src={mockup} className={style.laptop} alt="laptop" />
				<img
					src={props.preview}
					alt="preview"
					className={style.preview}
				/>
			</div>
			<div className={style.description} style={props.projectStyle}>
				<h2
					className={`${style.title} ${
						isIntersecting.includes(refs[0].current)
							? style.show
							: style.hidden
					}`}
					ref={refs[0]}
				>
					{props.title}
				</h2>
				<p className={style.paragraph}>{props.summary}</p>
				<div
					className={style.description__bottom}
					style={props.projectStyle}
				>
					<div style={{ marginRight: "30px" }}>
						<a href={props.github} target="_blank" rel="noreferrer">
							<Icon
								className={style.link}
								path={mdiGithub}
								size={1.2}
							/>
						</a>
						<a
							href={props.netlify}
							target="_blank"
							rel="noreferrer"
						>
							<Icon
								className={style.link}
								path={mdiOpenInNew}
								size={1.2}
							/>
						</a>
					</div>
					<span className={style.technology}>
						{props.technology1}
					</span>
					<span className={style.technology}>
						{props.technology2}
					</span>
					{props.technology3 ? (
						<span
							className={style.technology}
							style={{ paddingLeft: "10px" }}
						>
							{props.technology3}
						</span>
					) : null}
				</div>
			</div>
		</div>
	);
}

function ProjectRight(props) {
	const refs = [useRef(), useRef()];
	const options = { rootMargin: "-100px" };
	const isIntersecting = useIntersection(refs, options);

	return (
		<div className={style.content}>
			<div className={style.description} style={props.projectStyle}>
				<h2
					className={`${style.title} ${
						isIntersecting.includes(refs[0].current)
							? style.show
							: style.hidden
					}`}
					ref={refs[0]}
				>
					{props.title}
				</h2>
				<p className={style.paragraph}>{props.summary}</p>
				<div
					className={style.description__bottom}
					style={props.projectStyle}
				>
					<span className={style.technology}>
						{props.technology1}
					</span>
					<span className={style.technology}>
						{props.technology2}
					</span>
					{props.technology3 ? (
						<span
							className={style.technology}
							style={{ paddingLeft: "10px" }}
						>
							{props.technology3}
						</span>
					) : null}
					<div style={{ marginLeft: "30px" }}>
						<a href={props.github} target="_blank" rel="noreferrer">
							<Icon
								className={style.link}
								path={mdiGithub}
								size={1.2}
							/>
						</a>
						<a
							href={props.netlify}
							target="_blank"
							rel="noreferrer"
						>
							<Icon
								className={style.link}
								path={mdiOpenInNew}
								size={1.2}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={style.mockup}>
				<img src={mockup} className={style.laptop} alt="mockup" />
				<img
					src={props.preview}
					alt="preview"
					className={style.preview}
				/>
			</div>
		</div>
	);
}

export default function Project(props) {
	const projectStyle = {
		textAlign: props.mockupPosition === "left" ? "end" : "start",
		justifyContent:
			props.mockupPosition === "left" ? "flex-end" : "flex-start",
	};

	const content =
		props.mockupPosition === "left" ? (
			<ProjecLeft {...props} projectStyle={projectStyle} /> // IF POSITION IS SOMETHING ELSE (RIGHT)
		) : (
			<ProjectRight {...props} projectStyle={projectStyle} />
		);

	return <div className={style.container}>{content}</div>;
}
