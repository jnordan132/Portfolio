import ProfilePicture from "../ProfilePicture";
import resume from "../../assets/JN_Resume.pdf";

function Header() {
  return (
    <div className="header">
        <h1 style={{ color: 'white'}}>Hi, I'm Jacob Nordan. A Fullstack Developer from North Carolina.
        <div><a target="_blank" rel="noopener noreferrer" href={resume}>My Resume</a></div></h1>
        <ProfilePicture />
    </div>
  );
}

export default Header;
