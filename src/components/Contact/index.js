const styles = {
  listItem: {
    height: "150%",
    width: "150%",
  },
};

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <ul className="contactInfo">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jnordan132"
          >
            <img style={{ width: "30%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jacob-nordan/"
          >
            <img style={{ width: "30%"}} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jacob.nordan113322@gmail.com"
          >
            
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
