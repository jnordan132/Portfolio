import ProfilePicture from "../ProfilePicture";
import resume from "../../assets/JN_Resume.pdf";

function Header() {
  return (
    <div className="header">
        <h1>Hi, I'm Jacob Nordan. A Fullstack Developer and Creative Thinker.
        <div><a target="_blank" rel="noopener noreferrer" href={resume}>My Resume</a></div></h1>
        <ProfilePicture />
    </div>
  );
}

export default Header;
