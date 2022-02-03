function About() {
  return (
    <div className="aboutSkills">
      <div className="about">
        <h1>About Me</h1>
        <p className="description">
          Hi! My name is Jacob Nordan, I'm from Wilmington, NC, and I recently
          attended and completed the University of North Carolina at Chapel
          Hill's Full Stack Coding Bootcamp with an A+. I mainly develop with
          the MERN tech stack due to its flexibility and performance in
          developing interactive user interfaces.
        </p>
      </div>
      <br />
      <div className="skills">
        <h1>My Skills</h1>
        <div className="listFlex">
          <ul className="list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Material.UI</li>
          </ul>
          <ul className="list">
            <li>React.JS</li>
            <li>Express.JS</li>
            <li>Node.JS</li>
            <li>Redux</li>
            <li>jQuery</li>
          </ul>
          <ul className="list">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>NoSQL</li>
            <li>PWA</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
