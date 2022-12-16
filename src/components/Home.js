import githubLogo from "../images/github-mark.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import mediumLogo from "../images/medium.png";


function Home() {
  return (
    <>
      <h1>Hi, I'm Anri. I'm a software engineer.</h1>
      <img src={githubLogo} alt="github logo" />
      <img src={linkedInLogo} alt="linkedIn logo" />
      <img src={mediumLogo} alt="medium logo" />
    </>
  );
}

export default Home;
