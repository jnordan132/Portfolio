import ProfilePicture from "../ProfilePicture";
import Intro from "../Intro";

function Header() {
  return (
    <div className="header">
      <Intro />
      <ProfilePicture />
    </div>
  );
}

export default Header;
