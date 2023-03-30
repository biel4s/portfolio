import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Project from './components/project';
import Contact from './components/contact';
import './sass/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Project
                title="Weather In"
                summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                technology={`React ${String.fromCharCode(160).repeat(8)}Weather API ${String.fromCharCode(160).repeat(8)} 333`}
            />

            <Contact />
        </div>
    );
}

export default App;