function About() {
  return (
    <div className="aboutSkills">
      <div className="about">
        <h1>About Me</h1>
        <p className="description">
          Hi! My name is Jacob Nordan, I'm from Wilmington, NC, and I recently
          attended and completed the University of North Carolina at Chapel
          Hill's Full Stack Coding Bootcamp with an A+. I really enjoy
          developing in the MERN tech stack due to its flexibility and
          performance in developing interactive user interfaces.
        </p>
      </div>
      <br />
      <div className="skills">
        <h1>My Skills</h1>
        <div className="listFlex">
          <ul className="list">
            <li>
              <img alt="html svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
              <img alt="css svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
              <img alt="javascript svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
              <img alt="bootstrap svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
              <img alt="materialui svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
              <img alt="heroku svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
              <img alt="git svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
              <img alt="npm svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
            </li>
          </ul>
          <ul className="list">
            <li>
              <img alt="react svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
              <img alt="express svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />
              <img alt="node svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
              <img alt="redux svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
              <img alt="jquery svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" />
              <img alt="mysql svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
              <img alt="graphql svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg" />
              <img alt="mongodb svg" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
