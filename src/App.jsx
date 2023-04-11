import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';
import './sass/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <h2 className="project-title">Projects</h2>
            <Project
                title="Weather In"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                link="https://github.com/biel4s/weather-in-react"
                technology={`React${String.fromCharCode(160).repeat(8)}Weather API${String.fromCharCode(160).repeat(8)}Sass`}
            />
            <Project
                title="Calculator"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                link="https://github.com/biel4s/weather-in-react"
                technology={`React${String.fromCharCode(160).repeat(8)}Numbers API${String.fromCharCode(160).repeat(8)}Sass`}
            />
            <Project
                title="Portfolio"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                link="https://github.com/biel4s/portfolio-react"
                technology={`React${String.fromCharCode(160).repeat(8)}Sass`}
            />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;