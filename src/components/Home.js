import HomeNavBar from "./HomeNavBar";

import brushImg from "../images/home-brush.png";
import myPic from "../images/home-mypic.jpeg";
import githubLogo from "../images/github-mark.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import mediumLogo from "../images/medium.png";

function Home() {
  return (
    <div className="home">
      <p id="home-my-name">Anri Kawahara</p>
      <img id="home-my-pic" src={myPic} alt="snow view" />
      <HomeNavBar />
      <img id="home-brush" src={brushImg} alt="brush" />
      <p id="home-job-title">Full Stack Software Engineer</p>
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
