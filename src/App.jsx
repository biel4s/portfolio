import React, {useRef} from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import style from "./sass/app.module.scss";
import useIntersection from "./hooks/useIntersection";
/*
import slamdunk from "../../assets/images/mockups/slamdunk.png";
import portfolio from "../../assets/images/mockups/portfolio.png";
import calculator from "../../assets/images/mockups/calculator.png";
import weatherin from "../../assets/images/mockups/weatherin.png";
import weiser from "../../assets/images/mockups/weiser.png";
*/

export default function App() {

	const refs = [useRef()];
	const options = {rootMargin: "25px"};
	const isIntersecting = useIntersection(refs, options);

	return (
		<div className={style.container}>
			<Header />
			<Home />
			<About />
			<div className={style.projects} id="projects_container">
				<div className={style.firstProject}>
					<h1
						className={`${style.headingPrimary} ${
							isIntersecting.includes(refs[0].current)
								? style.show
								: style.hidden
						}`}
						ref={refs[0]}
					>
						Projects
					</h1>
					<Project
						mockupPosition="right"
						year="2024"
						title="Slamdunk"
						summary="The web application that allows users to track information about European basketball. Available tabs are home, news, events, schedule, stats, standings, teams and players. It uses the Firebase platform to handle the authentication system. Implemented external libraries such as Angular Material, RxJS and NgRx to increase work efficiency."
						preview="https://i.imgur.com/d7mJsYp.png"
						github="https://github.com/biel4s/slamdunk"
						netlify="https://slamdunk2.netlify.app"
						technology1="Angular"
						technology2="TypeScript"
						technology3="Firebase Auth"
					/>
				</div>
				<Project
					mockupPosition="left"
					title="Portfolio"
					year="2023"
					summary="My React portfolio showcases my proficiency in developing web applications using the React library. The portfolio features a collection of projects, each demonstrating my skills in implementing various React concepts. I have used module.scss to manage styles of the projects."
					preview="https://i.imgur.com/ygCT5TV.png"
					github="https://github.com/biel4s/portfolio-react"
					netlify="https://react-portfolio12.netlify.app"
					technology1="React"
					technology2="Sass"
				/>
				<Project
					mockupPosition="right"
					title="Student affairs office"
					year="2023"
					summary="My first Vue application using framework Nuxt. Simply and fully responsive app designed to manage students and staff within a university setting. The website is not yet complete, as it requires few functionalities to be implemented. The primary objective of this app was to understand concept and working in Vue."
					preview="https://i.imgur.com/OX50BDJ.png"
					github="https://github.com/biel4s/student-affairs-office"
					netlify="https://studentaffairsoffice.netlify.app"
					technology1="Vue"
					technology2="Nuxt"
				/>
				<Project
					mockupPosition="left"
					title="Calculator"
					year="2023"
					summary="This web application uses the React library and the Numbersapi API. Users can enter a number or perform arithmetic operations to get a result that displays a fun fact related to that number. I have also added a button that allows users to switch between light and dark mode."
					preview="https://i.imgur.com/s2bdCeg.png"
					github="https://github.com/biel4s/calculator-react"
					netlify="https://react-calculator25.netlify.app"
					technology1="React"
					technology2="Numbers API"
					technology3="Sass"
				/>
				<Project
					mockupPosition="right"
					title="Weather In"
					year="2023"
					summary="The starting point of my React journey, it fetches current weather information for a specified city using the openweathermap API. By creating this application, I wanted to practice fetching data from APIs and learn the basics of React."
					preview="https://i.imgur.com/xZprG9s.png"
					github="https://github.com/biel4s/weather-in-react"
					netlify="https://react-weather-in.netlify.app"
					technology1="React"
					technology2="Weather API"
					technology3="Sass"
				/>
				<Project
					mockupPosition="left"
					title="Weiser"
					year="2022"
					summary="My first major project was a website template for a welding company. The process of creating my own design helped me understand the importance of the attention to detail, colors, and aesthetics of a website. The main goal of the project was to apply my foundational knowledge of HTML and CSS in a practical manner."
					preview="https://i.imgur.com/C5ANdCX.png"
					github="https://github.com/biel4s/Weiser"
					netlify="https://biel4s.github.io/Weiser/"
					technology1="HTML"
					technology2="CSS"
					technology3="JavaScript"
				/>
			</div>
			<Contact />
			<Footer />
		</div>
	);
}
