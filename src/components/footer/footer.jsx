import React from "react";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import style from "./footer.module.scss";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={style.container}>
			<div className={style.top}>
				<ul className={style.list}>
					<li className={style.item}>ABOUT</li>
					<li className={style.item}>PROJECTS</li>
					<li className={style.item}>CONTACT</li>
				</ul>
			</div>
			<div className={style.bottom}>
				<div className={style.bottom__left}>
					<p className={style.text}>
						© Copyright {currentYear} - Kamil Bielawski
					</p>
				</div>
				<div className={style.bottom__right}>
					<a
						href="https://github.com/biel4s"
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							path={mdiGithub}
							size={1.3}
							className={style.link}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/kamil-bielawski"
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							path={mdiLinkedin}
							size={1.3}
							className={style.link}
						/>
					</a>
					<a
						href="https://www.facebook.com/biel4s"
						target="_blank"
						rel="noreferrer"
					>
						<Icon
							path={mdiFacebook}
							size={1.3}
							className={style.link}
						/>
					</a>
				</div>
			</div>
		</footer>
	);
}
