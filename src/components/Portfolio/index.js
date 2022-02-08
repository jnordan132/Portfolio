import shoeFanatic from "../../assets/Shoe-Fanatic.png";
import fitness from "../../assets/fitness.jpg";
import Feedit from "../../assets/Feedit.png";
import terminal from "../../assets/employeeTracker.jpg";
import weather from "../../assets/weather.png";
import readmeGen from "../../assets/readmeGen.png";
import quiz from "../../assets/codeQuiz.png";
import noteTaker from "../../assets/NoteTaker.png";

function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <div className="cardDiv">
        <div className="card">
          <img
            src={shoeFanatic}
            alt="Shoe Fanatic"
          ></img>
          <h2>
            <strong>Shoe Fanatic</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/Shoe-Fanatic">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://limitless-bastion-50224.herokuapp.com/">Site</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={Feedit}
            alt="Feedit"
          ></img>
          <h2>
            <strong>FEEDIT</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/FEEDIT">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://jnordan132.github.io/FEEDIT/">Site</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={quiz}
            alt="Javascript Quiz"
          ></img>
          <h2>
            <strong>JavaScript Quiz</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/Javascript-Fundamentals-Quiz">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://jnordan132.github.io/Javascript-Fundamentals-Quiz/">Site</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={noteTaker}
            alt="Weather Dashboard"
          ></img>
          <h2>
            <strong>Note Taker</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/Note-Taker">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://note-taker-jacobnordan.herokuapp.com/notes">Site</a></button>
          </div>
        </div>
      </div>
      <div className="cardDiv">
      <div className="card">
          <img
            src={weather}
            alt="Weather Dashboard"
          ></img>
          <h2>
            <strong>Weather Dashboard</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/City-Weather-Dashboard">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://jnordan132.github.io/City-Weather-Dashboard/">Site</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={fitness}
            alt="Fitness Tracker"
          ></img>
          <h2>
            <strong>Fitness Tracker</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/Fitness-Tracker">Code</a></button>
            <button className="site"><a target="_blank" rel="noopener noreferrer"href="https://warm-wildwood-42692.herokuapp.com/">Site</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={readmeGen}
            alt="Feedit"
          ></img>
          <h2>
            <strong>README.md Generator</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/README-Generator-Node.js">Code</a></button>
          </div>
        </div>
        <div className="card">
          <img
            src={terminal}
            alt="Employee Tracker"
          ></img>
          <h2>
            <strong>Employee Tracker</strong>
          </h2>
          <div className="buttons">
            <button className="code"><a target="_blank" rel="noopener noreferrer"href="https://github.com/jnordan132/Employee-Tracker">Code</a></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
