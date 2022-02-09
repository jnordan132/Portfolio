import React, { useState } from "react";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    console.log(document.body.getBoundingClientRect);
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <nav className={this.state.show ? "active" : "hidden"}>
        <div className="navContent">
          <h1>&#123; JN &#125;</h1>
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
