import githubLogo from "../images/github-mark.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import mediumLogo from "../images/medium.png";

function Home() {
  return (
    <div>
      <h1>Hi, I'm Anri. I'm a software engineer.</h1>
      <a href="https://github.com/anri0806">
        <img className="logo-link" src={githubLogo} alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/anri-kawahara-63460358/">
        <img className="logo-link" src={linkedInLogo} alt="linkedIn logo" />
      </a>
      <a href="https://medium.com/@anri.kawahara">
        <img className="logo-link" src={mediumLogo} alt="medium logo" />{" "}
      </a>
    </div>
  );
}

export default Home;
