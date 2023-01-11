import NavBar from "./NavBar";
import InviteOnly from "./InviteOnly";
import FamilyAlbum from "./FamilyAlbum";
import BabyLogbook from "./BabyLogbook";
import FlagsOfTheWorld from "./FlagsOfTheWorld";
import titleImg from "../images/project-title.png";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-navbar">
        <NavBar />
      </div>
      <img className="projects-title" src={titleImg} alt="projects" />
      <div className="projects-container">
        <InviteOnly />
        <FamilyAlbum />
        <BabyLogbook />
        <FlagsOfTheWorld />
      </div>
    </div>
  );
}

export default Projects;
