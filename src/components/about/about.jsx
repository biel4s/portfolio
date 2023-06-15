import React, { useRef } from "react";
import useElementOnScroll from "../../hooks/useElementOnScroll";
import style from "./about.module.scss";
import myself from "../../assets/images/myself2.png";

export default function About() {
	// const myRef = useRef(null);
	// const [isVisible, setIsVisible] = useState(false);
	// console.log('isVisible', isVisible)

	// useEffect(() => {
	// 	const observer = new IntersectionObserver((entries) => {
	// 		const entry = entries[0];
	// 		setIsVisible(entry.isIntersecting);
	// 	},
	// 		{ rootMargin: "-100px" }
	// 	);
	// 	observer.observe(myRef.current);
	// }, [])

	const targetRef1 = useRef(null);
	const targetRef2 = useRef(null);

	const isVisible1 = useElementOnScroll({ threshhold: 0.3 }, targetRef1);
	const isVisible2 = useElementOnScroll({ threshhold: 0.3 }, targetRef2);

	return (
		<div className={style.container} id="about_container">
			<div className={style.content}>
				<h2
					className={`${style.headingPrimary} ${
						style[isVisible1 ? "show" : "hidden"]
					}`}
					ref={targetRef1}
				>
					About
				</h2>
				<div className={style.description}>
					<div
						className={`${style.text} ${
							style[isVisible2 ? "show" : "hidden"]
						}`}
						ref={targetRef2}
					>
						<p className={style.paragraph}>
							Hi there! My name is{" "}
							<span className={style.highlight}>
								Kamil Bielawski
							</span>
							, and I'm a third-year student studying front-end
							web development in Gdańsk. I'm currently learning
							and using React in my projects, and it's quickly
							become my favorite library to work with. I love how
							it simplifies the process of building complex user
							interfaces and makes it easy to reuse code across
							different parts of a website.
						</p>
						<p className={style.paragraph}>
							As a front-end developer, I'm passionate about
							creating beautiful, responsive websites that provide
							a great user experience. During my studies, I've had
							the opportunity to work on a variety of projects,
							both individually and as part of a team. I've
							learned how to code using HTML, CSS, and JavaScript,
							and I'm constantly looking for new ways to improve
							my skills and stay up-to-date with the latest
							industry trends.{" "}
						</p>
						<p className={style.paragraph}>
							I'm excited to continue growing as a developer and
							to share my skills with the world. If you'd like to
							get in touch, please don't hesitate to reach out!
						</p>
					</div>
					<div className={style.circle}>
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
