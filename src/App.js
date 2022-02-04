import "./App.css";
import "./index.css";
import ProfilePicture from "./components/ProfilePicture";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ProfilePicture />
      <br />
      <About />
      <br />
      <Portfolio />
      <br />
      <Contact />
      <br />
      <Footer />
    </div>
  );
}

export default App;
