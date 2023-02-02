import babyLogBook from "../images/baby-logbook.png";
import githubLogo from "../images/github-mark.png";
import demoLogo from "../images/demo.png";

function BabyLogbook() {
  return (
    <div className="project-box">
      <div className="project">
        <div className="default-image">
          <img src={babyLogBook} alt="baby logbook" />
        </div>
        <div className="hover-info">
          <h5>Baby Logbook</h5>
          <p id="project-info-p">
            A daily tracker where parents can record their baby's milestones,
            doctor appointments and immunizations.
          </p>
          <p className="project-technologies">React</p>
          <p className="project-technologies">Sinatra</p>
          <p className="project-technologies">Bootstrap</p>
          <div className="project-logo-container">
            <a href="https://youtu.be/NNqnDEDgGkM">
              <img
                className="project-demo-logo"
                src={demoLogo}
                alt="demo logo"
              />
            </a>
            <a href="https://github.com/anri0806/baby_logbook_frontend">
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

export default BabyLogbook;
