import React from "react";
import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";
import { mdiLinkedin } from "@mdi/js";
import { mdiFacebook } from "@mdi/js";
import style from "./footer.module.scss";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

	const renderFooterLink = (content) => {
		return (
			<ul className={style.list} key={content}>
				<li className={style.item}>
					<button className={style.button}>{content}</button>
				</li>
			</ul>
		);
	};

	return (
		<footer className={style.container}>
			<nav className={style.top}>
				{navLinks.map((nav) => renderFooterLink(nav))}
			</nav>
			<div className={style.bottom}>
				<div className={style.bottomLeft}>
					<p className={style.text}>
						© Copyright {currentYear} - Kamil Bielawski
					</p>
				</div>
				<div className={style.bottomRight}>
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
