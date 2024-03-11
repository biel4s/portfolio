import React, { useRef } from "react";
import useIntersection from "../../hooks/useIntersection";
import style from "./about.module.scss";
import myself from "../../assets/images/myself2.png";

export default function About() {

	const refs = [useRef(), useRef(), useRef()];
	const options = { rootMargin: "-50px" };
	const isIntersecting = useIntersection(refs, options);

	return (
		<div className={style.container} id="about_container">
			<div className={style.content}>
				<h1
					className={`${style.headingPrimary} ${
						isIntersecting.includes(refs[0].current)
							? style.show
							: style.hidden
					}`}
					ref={refs[0]}
				>
					About
				</h1>
				<div className={style.description}>
					<div className={`${style.text} ${
						isIntersecting.includes(refs[1].current)
							? style.show
							: style.hidden
					}`} ref={refs[1]}>
						<p
							className={style.paragraph}
						>
							Hi there! My name is{" "}
							<span className={style.highlight}>
								Kamil Bielawski
							</span>
							, and I'm a graduate of engineering studies in Computer Science with a specialization in Front-end Development. I was learning React during my studies
							and I've completed few projects using this library. During my three-month intership I was working with Angular, and it's quickly
							become my favorite framework to work with.
						</p>
						<p
							className={style.paragraph}
						>
							As a front-end developer, I'm passionate about
							creating beautiful, responsive websites that provide
							a great user experience. During my education, I've had
							the opportunity to work on a variety of projects,
							both individually and as part of a team. I'm constantly
							looking for new ways to improve	my skills and stay
							up-to-date with the latest industry trends.
						</p>
						<p
							className={style.paragraph}
						>
							I'm excited to continue growing as a developer and
							to share my skills with the world. If you'd like to
							get in touch, please don't hesitate to reach out!
						</p>
					</div>
					<div
						className={`${style.circle} ${
							isIntersecting.includes(refs[2].current)
								? style.show
								: style.hidden
						}`}
						ref={refs[2]}
					>
						<img
							src={myself}
							className={style.myself}
							alt="myself"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
