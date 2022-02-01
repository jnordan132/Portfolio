const styles = {
  contact: {
    marginBottom: "3%",
  },
  list: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
};

function Contact() {
  return (
    <div style={styles.contact}>
      <h1>Contact Me</h1>
      <ul style={styles.list}>
        <li>
          Email:
          <a href="mailto:jacob.nordan113322@gmail.com">
            jacob.nordan113322@gmail.com
          </a>
        </li>
        <li>
          Github: <a href="https://github.com/jnordan132">Github</a>
        </li>
        <li>
          LinkedIn:
          <a href="https://www.linkedin.com/in/jacob-nordan/">LinkedIn</a>
        </li>
        <li>
          Resume: <a href="">PDF</a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
