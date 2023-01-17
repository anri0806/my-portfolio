import familyAlbum from "../images/family-album.png";
import githubLogo from "../images/github-mark.png";
import demoLogo from "../images/demo.png";

function FamilyAlbum() {
  return (
    <div className="project-box">
      <p id="flag-title">Family Album</p>
      <div className="project">
        <div className="default-image">
          <img src={familyAlbum} alt="family album" />
        </div>
        <div className="hover-info">
          <p>
            A photo album app where users can organize and safely share photos
            with family and friends.
          </p>
          <p className="project-technologies">React</p>
          <p className="project-technologies">Ruby on Rails</p>
          <p className="project-technologies">Bootstrap</p>
          <p className="project-technologies">Firebase</p>

          <div className="project-logo-container">
            <a href="https://youtu.be/2WOkl2WyfqE">
              <img
                className="project-demo-logo"
                src={demoLogo}
                alt="demo logo"
              />
            </a>
            <a href="https://github.com/anri0806/family-album">
              <img
                className="project-code-logo"
                src={githubLogo}
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyAlbum;
