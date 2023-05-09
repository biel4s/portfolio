import React from "react";
import logo from "../../assets/images/logo-white.png";
import style from "./header.module.scss";

export default function Header() {

	const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

	const renderNavLink = (content) => {
		return (
			<ul className={style.list} key={content}>
				<li className={style.item}>
					<button className={style.button}>{content}</button>
				</li>
			</ul>
		)
	}

	return (
		<header className={style.container}>
			<div className={style.left}>
				<img
					src={logo}
					className={style.logo}
					width="50"
					height="40"
					alt="logo"
				/>
				<h2 className={style.headingPrimary}>
					KAMIL
					<span className={style.highlight}>&nbsp;BIELAWSKI</span>
				</h2>
			</div>
			<nav className={style.right}>
				{navLinks.map((nav) => renderNavLink(nav))}
			</nav>
		</header>
	);
}
