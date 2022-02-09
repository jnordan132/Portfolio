import "./App.css";
import "./index.css";
import Nav from "./components/Nav";
import Header from './components/Header'
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <br />
      <br />
      <br />
      <br /> */}
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
