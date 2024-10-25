import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div style={styles.cardContainer}>
      <header style={styles.header}>
        <h1 style={styles.title}>Project Title</h1>
        <p style={styles.description}>
          This is a brief description of the project.
        </p>
      </header>

      <section style={styles.content}>
        <p style={styles.details}>
          This section contains details about the project, like technologies
          used and features.
        </p>
        <div style={styles.tags}>
          <span style={styles.tag}>React</span>
          <span style={styles.tag}>CSS</span>
          <span style={styles.tag}>Firebase</span>
        </div>
      </section>

      <footer style={styles.footer}>
        <a href="https://github.com" style={styles.button}>
          <FaGithub style={styles.icon} /> Code
        </a>
        <a href="https://example.com" style={styles.buttonDemo}>
          <FaExternalLinkAlt style={styles.icon} /> Demo
        </a>
      </footer>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: "#B39A7A",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
  },
  header: {
    backgroundColor: "#D9C5A0",
    padding: "10px",
    borderRadius: "10px",
    borderBottom: "1px solid #D1BB9E",
  },
  title: {
    color: "#3D3124",
    fontSize: "1.5rem",
    margin: "0 0 10px 0",
  },
  description: {
    color: "#5A4B3A", // Un marrón más claro
    fontSize: "1rem",
  },
  content: {
    padding: "10px",
  },
  details: {
    color: "white",
    marginBottom: "10px",
  },
  tags: {
    display: "flex",
    gap: "5px",
  },
  tag: {
    backgroundColor: "white",
    border: "1px solid #41444B",
    padding: "5px 5px",
    borderRadius: "5px",
    color: "#3D3124",
    fontSize: "12px",
  },
  footer: {
    backgroundColor: "#D9C5A0", // El mismo marrón suave
    padding: "10px",
    display: "flex",
    justifyContent: "space-around",
    borderRadius: "10px",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    padding: "10px 30px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  buttonDemo: {
    backgroundColor: "#B39DDB", // Morado suave
    color: "white",
    padding: "10px 30px",
    borderRadius: "5px",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  icon: {
    fontSize: "1rem",
  },
};

export default ProjectCard;
