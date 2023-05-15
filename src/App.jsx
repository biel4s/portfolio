import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import style from "./sass/app.module.scss";


export default function App() {
	return (
		<div className={style.container}>
			<Header />
			<Home />
			<About />
			<Project
				firstProject="yes"
				mockupPosition="left"
				title="Weather In"
				summary="My first React application fetches current weather information for a specified city using the openweathermap API. By creating this application, I wanted to practice fetching data from APIs and learn the basics of React."
				preview="https://i.imgur.com/7AtLsD9.png"
				github="https://github.com/biel4s/weather-in-react"
				netlify="https://react-weather-in.netlify.app"
				technology1="React"
				technology2="Weather API"
				technology3="Sass"
			/>
			<Project
				mockupPosition="right"
				title="Calculator"
				summary="This web application uses the React library and the Numbersapi API. Users can enter a number or perform arithmetic operations to get a result that displays a fun fact related to that number. I have also added a button that allows users to switch between light and dark mode."
				preview="https://i.imgur.com/HfQdED6.png"
				netlify="https://react-calculator25.netlify.app"
				technology1="React"
				technology2="Numbers API"
				technology3="Sass"
			/>
			<Project
				mockupPosition="left"
				title="Portfolio"
				summary="My React portfolio showcases my proficiency in developing web applications using the React library. The portfolio features a collection of projects, each demonstrating my skills in implementing various React concepts. I have used module.scss to manage the styles of the projects."
				preview="https://i.imgur.com/bccNO1C.jpeg"
				github="https://github.com/biel4s/portfolio-react"
				netlify="https://react-portfolio12.netlify.app"
				technology1="React"
				technology2="Sass"
			/>
			<Contact />
			<Footer />
		</div>
	);
}
