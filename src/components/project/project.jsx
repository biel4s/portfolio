import React from "react";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkVariant } from "@mdi/js";
import mockup from "../../assets/images/mockup.png";
import style from "./project.module.scss";

function ProjecLeft(props) {
	return (
		<div className={style.content}>
			<div className={style.mockup}>
				<img src={mockup} alt="laptop" width="700" />
				<img
					src={props.preview}
					alt="preview"
					className={style.preview}
				/>
			</div>
			<div className={style.description} style={props.projectStyle}>
				<h2 className={style.heading__primary}>{props.title}</h2>
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
								path={mdiLinkVariant}
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
	return (
		<div className={style.content}>
			<div className={style.description} style={props.projectStyle}>
				<h2 className={style.heading__primary}>{props.title}</h2>
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
								path={mdiLinkVariant}
								size={1.2}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={style.mockup}>
				<img src={mockup} alt="mockup" width="700" />
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
		textAlign: props.position === "left" ? "end" : "start",
		justifyContent: props.position === "left" ? "flex-end" : "flex-start",
	};

	const content =
		props.position === "left" ? (
			<ProjecLeft {...props} projectStyle={projectStyle} /> // IF POSITION IS SOMETHING ELSE (RIGHT)
		) : (
			<ProjectRight {...props} projectStyle={projectStyle} />
		);

	return <div className={style.container}>{content}</div>;
}
