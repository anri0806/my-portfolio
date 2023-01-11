import flagsWorld from "../images/flag-world.png";
import githubLogo from "../images/github-mark.png";
import demoLogo from "../images/demo.png";

function FlagsOfTheWorld() {
  return (
    <div className="project-box">
      <div className="project">
        <div className="default-image">
          <img src={flagsWorld} alt="flags of the world" />
        </div>
        <div className="hover-info">
          <h3>Flags of the World</h3>
          <p>
            A flag quiz game app that allows users to learn country flags and
            test their knowledge.
          </p>
          <p className="project-technologies">React</p>
          <p className="project-technologies">Javascript</p>
          <p className="project-technologies">JSON</p>
          <p className="project-technologies">MUI</p>

          <div className="project-logo-container">
            {/* <a href="">
            <p>demo</p>
          </a> */}
            <a href="https://github.com/anri0806/flags-of-the-world">
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

export default FlagsOfTheWorld;
