import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Project from "./components/project/project";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import "./sass/App.scss";

export default function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<About />
			<h2 className="project-title2">Projects</h2>
			<Project
				mockupPosition="left"
				title="Weather In"
				summary="My first application using the React library. It uses the
openweathermap API to display current weather information
for a specified city. By creating this application, I wanted to
practice fetching data from APIs and learn the basics of React."
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
				summary="A web application using the React library. Using the
Numbersapi API, users can enter a number or perform
arithmetic operations to get a result that displays a fun fact
related to that number. I have also added a button that allows
users to switch between light and dark mode."
				preview="https://i.imgur.com/HfQdED6.png"
				github="https://github.com/biel4s/calculator-react"
				netlify="https://react-calculator25.netlify.app"
				technology1="React"
				technology2="Numbers API"
				technology3="Sass"
			/>
			<Project
				mockupPosition="left"
				title="Portfolio"
				summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
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
