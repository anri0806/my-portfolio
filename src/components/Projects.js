import NavBar from "./NavBar";
import InviteOnly from "./InviteOnly";
import FamilyAlbum from "./FamilyAlbum";
import BabyLogbook from "./BabyLogbook";
import FlagsOfTheWorld from "./FlagsOfTheWorld";

function Projects() {
  return (
    <div className="projects">
      {/* <NavBar /> */}

      <div id="projects-title">
        <p style={{ fontSize: "4vw" }}>03. </p>
        <p style={{ fontWeight: "900" }}>Projects</p>
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
