import React from "react";

export default class Nav extends React.Component {

  render() {
    return (
      <nav >
        <div className="navContent">
          <h1>&#123;JN&#125;</h1>
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener  noreferrer"
                href="https://github.com/jnordan132"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/jacob-nordan/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
