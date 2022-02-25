import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="contactCard">
      <h1>Contact Me</h1>
      <div className="contactList">
        <a href="tel:910-620-0143">
          <LocalPhoneIcon sx={{ width: 40, height: 40}}/>
        </a>
        <a href="mailto:jacob.nordan113322@gmail.com">
          <AlternateEmailIcon sx={{ width: 40, height: 40}}/>
        </a>
        <a href="https://github.com/jnordan132" target="_blank" rel="noreferrer">
          <GitHubIcon sx={{ width: 40, height: 40}}/>
        </a>
        <a href="https://www.linkedin.com/in/jacob-nordan/" target="_blank" rel="noreferrer">
          <LinkedInIcon sx={{ width: 40, height: 40}}/>
        </a>
      </div>
    </div>
  );
}

export default Contact;
