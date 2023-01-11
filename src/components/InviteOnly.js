import inviteOnly from "../images/invite-only.png";
import githubLogo from "../images/github-mark.png";
import demoLogo from "../images/demo.png";

function InviteOnly() {
  return (
    <div className="project-box">
      <div className="project">
        <div className="default-image">
          <img src={inviteOnly} alt="invite only" />
        </div>
        <div className="hover-info">
          <h3>Invite Only</h3>
          <p>
            A private social media app where invited users can share posts and
            photos and create their own private group.
          </p>
          <p className="project-technologies">React</p>
          <p className="project-technologies">Ruby on Rails</p>
          <p className="project-technologies">Bootstrap</p>
          <p className="project-technologies">Devise Invitable</p>
          <div className="project-logo-container">
            <a href="https://youtu.be/GQoX64CcZJA">
              <img
                className="project-demo-logo"
                src={demoLogo}
                alt="demo logo"
              />
            </a>
            <a href="https://github.com/anri0806/invite-only">
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

export default InviteOnly;
