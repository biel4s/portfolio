import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo-white.png";
import style from "./header.module.scss";

//SCROLL FUNCTION
function useScrollDirection() {
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isHidden, setIsHidden] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.pageYOffset;
			const direction = scrollY > lastScrollY ? "down" : "up";
			if (direction !== isHidden && scrollY > 100) {
				if (Math.abs(scrollY - lastScrollY) > 1) {
					setIsHidden(direction === "down");
				}
			}
			setLastScrollY(scrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY, isHidden]);

	return isHidden ? "hide" : "show";
}

export default function Header() {
	//BACKGROUND
	const [background, setBackground] = useState(false);
	const changeBackground = () => {
		if (window.scrollY >= 150) {
			setBackground(true);
		} else {
			setBackground(false);
		}
	};
	window.addEventListener("scroll", changeBackground);
	const isHidden = useScrollDirection();

	//NAV LINKS
	const navLinks = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
	const renderNavLink = (content) => {
		const scrollToId = `${content.toLowerCase()}_container`;

		const handleClickNav = () => {
			document
				.getElementById(scrollToId)
				.scrollIntoView({ behavior: "smooth" });
		};

		return (
			<ul className={style.list} key={content}>
				<li className={style.item}>
					<button onClick={handleClickNav} className={style.button}>
						{content}
					</button>
				</li>
			</ul>
		);
	};

	const scrollToHome = "home_container";
	const handleClick = () => {
		document
			.getElementById(scrollToHome)
			.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<header
			className={`
				${style.container} 
				${style[isHidden]} 
				${style[background ? "active" : "inactive"]}
			`}
		>
			<div className={style.brand} onClick={handleClick}>
				<img src={logo} className={style.logo} alt="logo" />
				<h2 className={style.headingPrimary}>
					kamil
					<span className={style.highlight}>&nbsp;bielawski</span>
				</h2>
			</div>
			<nav className={style.navMenu}>
				{navLinks.map((nav) => renderNavLink(nav))}
			</nav>
			<button className={style.hamburgerMenu}>
				Click
			</button>
		</header>
	);
}
