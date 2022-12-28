import NavBar from "./NavBar";
import InviteOnly from "./InviteOnly";
import FamilyAlbum from "./FamilyAlbum";
import BabyLogbook from "./BabyLogbook";
import FlagsOfTheWorld from "./FlagsOfTheWorld";

function Projects() {
  return (
    <div className="projects">
      <NavBar />
      <div className="project-content">
        <InviteOnly />
        <FamilyAlbum />
        <BabyLogbook />
        <FlagsOfTheWorld />
      </div>
    </div>
  );
}

export default Projects;
