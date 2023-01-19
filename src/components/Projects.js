import InviteOnly from "./InviteOnly";
import FamilyAlbum from "./FamilyAlbum";
import BabyLogbook from "./BabyLogbook";
import FlagsOfTheWorld from "./FlagsOfTheWorld";

import brushImg from "../images/home-brush.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <p style={{ fontSize: "4vw" }}>03. </p>
        <p style={{ fontWeight: "900" }}>Projects</p>
        <img id="projects-brush" src={brushImg} alt="brush" />
      </div>

      <div className="projects-container">
        <InviteOnly />
        <FamilyAlbum />
        <BabyLogbook />
        <FlagsOfTheWorld />
      </div>
    </section>
  );
}

export default Projects;
