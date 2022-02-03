import {
  FaGithub,
  FaLinkedin,
  FaClipboardList,
  FaEnvelope,
} from "react-icons/fa";

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
            <FaGithub style={styles.listItem} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jacob-nordan/"
          >
            <FaLinkedin style={styles.listItem} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:jacob.nordan113322@gmail.com"
          >
            <FaEnvelope style={styles.listItem} />
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="">
            <FaClipboardList style={styles.listItem} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
