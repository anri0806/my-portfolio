import inviteOnly from "../images/invite-only.png";

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
          <a href="https://youtu.be/GQoX64CcZJA">
            <p>demo</p>
          </a>
          <a href="https://github.com/anri0806/invite-only">
            <p>code</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default InviteOnly;
