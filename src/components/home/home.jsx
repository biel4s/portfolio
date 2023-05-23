import React from "react";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import style from "./home.module.scss";

export default function Home(props) {
	return (
		<div className={style.container} id="home_container">
			<div className={style.content}>
				<p className={style.text}>Hello, my name is</p>
				<h1 className={style.headingPrimary}>Kamil Bielawski</h1>
				<h3 className={style.headingSecondary}>
					Front-end developer
				</h3>
				<p className={style.description}>
					With a passion for creating beautiful, responsive websites
					and a dedication to learning the latest front-end
					technologies
				</p>
			</div>
			<button className={style.btn}>
				View my projects
				<Icon className={style.arrow} path={mdiArrowRight} size={1} />
			</button>
		</div>
	);
}
