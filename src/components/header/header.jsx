import React from "react";
import logo from "../../assets/images/logo-white.png";
import style from "./header.module.scss";

export default function Header() {
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
			<div className={style.right}>
				<ul className={style.list}>
					<li className={style.item}>ABOUT</li>
					<li className={style.item}>PROJECTS</li>
					<li className={style.item}>CONTACT</li>
				</ul>
			</div>
		</header>
	);
}
