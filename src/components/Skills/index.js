const styles = {
  list: {
    listStyle: "none",
    textAlign: "center",
    margin: "0",
    padding: "2%",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
};

function Skills() {
  return (
    <div>
      <h1>My Skills</h1>
      <div style={styles.flex}>
        <ul style={styles.list}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>Material.UI</li>
        </ul>
        <ul style={styles.list}>
          <li>React.JS</li>
          <li>Express.JS</li>
          <li>Node.JS</li>
          <li>Redux</li>
          <li>jQuery</li>
        </ul>
        <ul style={styles.list}>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>PWA</li>
          <li>Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
