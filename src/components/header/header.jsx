import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo-white.png";
import style from "./header.module.scss";

// function useScrollDirection() {
// 	const [isHidden, setIsHidden] = useState(null);

// 	useEffect(() => {
// 		let lastScrollY = window.pageYOffset;

// 		const updateScrollDirection = () => {
// 			const scrollY = window.pageYOffset;
// 			const direction = scrollY > lastScrollY ? "down" : "up";

// 			if (
// 				direction !== isHidden &&
// 				Math.abs(
// 					scrollY - lastScrollY > 1 || scrollY - lastScrollY < -1
// 				)
// 			) {
// 				setIsHidden(direction);
// 			}
// 			lastScrollY = scrollY > 0 ? scrollY : 0;
// 		};

// 		window.addEventListener("scroll", updateScrollDirection);
// 		return () => {
// 			window.removeEventListener("scroll", updateScrollDirection);
// 		}
// 	}, [isHidden]);
// 	return isHidden;
// };

function useScrollDirection() {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? "down" : "up";
			if (direction !== isHidden && Math.abs(scrollY - lastScrollY) > 1) {
				setIsHidden(direction === "down");
			}
			setLastScrollY(scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, isHidden]);

	return isHidden ? "hide" : "show";
}

export default function Header() {
	const [background, setBackground] = useState(false);

	const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

	const renderNavLink = (content) => {
		return (
			<ul className={style.list} key={content}>
				<li className={style.item}>
					<button className={style.button}>{content}</button>
				</li>
			</ul>
		);
	};

	// const isHidden = (useScrollDirection() === "down" ? "hide" : "show");

	const changeBackground = () => {
		if (window.scrollY >= 50) {
			setBackground(true);
		} else {
			setBackground(false);
		}
	};
	window.addEventListener("scroll", changeBackground);

	const isHidden = useScrollDirection();

	return (
		<header
			className={`
				${style.container} 
				${style[isHidden]} 
				${style[background ? "active" : ""]}
			`}
		>
			<div className={style.left}>
				<img
					src={logo}
					className={style.logo}
					width="50"
					height="40"
					alt="logo"
				/>
				<h2 className={style.headingPrimary}>
					kamil
					<span className={style.highlight}>&nbsp;bielawski</span>
				</h2>
			</div>
			<nav className={style.right}>
				{navLinks.map((nav) => renderNavLink(nav))}
			</nav>
		</header>
	);
}
