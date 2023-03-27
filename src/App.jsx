import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import './sass/App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
    </div>
  );
}

export default App;