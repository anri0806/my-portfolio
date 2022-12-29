import NavBar from "./NavBar";
import InviteOnly from "./InviteOnly";
import FamilyAlbum from "./FamilyAlbum";
import BabyLogbook from "./BabyLogbook";
import FlagsOfTheWorld from "./FlagsOfTheWorld";

function Projects() {
  return (
    <div className="projects">
      <div className="projects-navbar">
        <NavBar />
      </div>
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
