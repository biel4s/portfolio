import React from "react";
import style from "./about.module.scss";

export default function About() {
	return (
		<div className={style.container}>
			<h2 className={style.heading__primary}>About</h2>
			<p className={style.text}>
				Hi there! My name is{" "}
				<span className={style.highlight}>Kamil Bielawski</span>, and
				I'm a third-year student studying front-end web development in
				Gdańsk. I'm currently learning and using React in my projects,
				and it's quickly become my favorite library to work with. I love
				how it simplifies the process of building complex user
				interfaces and makes it easy to reuse code across different
				parts of a website.
			</p>
			<p className={style.text}>
				As a front-end developer, I'm passionate about creating
				beautiful, responsive websites that provide a great user
				experience. During my studies, I've had the opportunity to work
				on a variety of projects, both individually and as part of a
				team. I've learned how to code using HTML, CSS, and JavaScript,
				and I'm constantly looking for new ways to improve my skills and
				stay up-to-date with the latest industry trends.{" "}
			</p>
			<p className={style.text}>
				I'm excited to continue growing as a developer and to share my
				skills with the world. If you'd like to get in touch, please
				don't hesitate to reach out!
			</p>
		</div>
	);
}
