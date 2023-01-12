import Carousel from 'react-bootstrap/Carousel';

import NavBar from "./NavBar";

import aboutMeTitle from "../images/about-me-title.png";
import travelLogo from "../images/travel-and-tourism.png";
import hikingLogo from "../images/hiking.png";
import gameLogo from "../images/game-console.png";
import dogLogo from "../images/boston-terrier.png";
import exerciseLogo from "../images/exercises.png";
import carpenterLogo from "../images/carpenter.png";
import pianoLogo from "../images/piano.png";
import githubLogo from "../images/github-mark.png";
import linkedInLogo from "../images/LI-In-Bug.png";
import mediumLogo from "../images/medium.png";

function AboutMe() {
  /// ADD fun facts? => born and raised in Japan, memorized all the country flags

  return (
    <div className="about-me">
      <NavBar />
      <img className="about-me-title" src={aboutMeTitle} alt="about me" />

      <p>
        Hello! My name is Anri Kawahara and I am a Full Stack Software Developer
        with a background in the Hospitality and Real Estate industry. My
        interest in programming and technology began in the middle school. I
        created my very first website using simple HTML and completely fell in
        love with coding. During pandemic I finally decided to pursue my passion
        and enrolled in the Flatiron School's Full Stack Web Development Program
        where I fell in love with programming again!
      </p>
      <p>
        I believe that the passion can be driving force to learn more and give
        me all important sense of purpose to be the best possible version of me.
      </p>
      <div className="title">
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
      <p>Aside from work, my passions are:</p>
      <img className="about-me-logo" src={travelLogo} alt="traveling" />
      <img className="about-me-logo" src={hikingLogo} alt="hiking" />
      <img className="about-me-logo" src={gameLogo} alt="game" />
      <img className="about-me-logo" src={dogLogo} alt="boston terrier" />
      <img className="about-me-logo" src={exerciseLogo} alt="exercise" />
      <img
        className="about-me-logo"
        src={carpenterLogo}
        alt="build and make things"
      />
      <img className="about-me-logo" src={pianoLogo} alt="playing piano" />

      <br />
      <a href="https://www.flaticon.com" title="icons">
        Icons created by Flaticon
      </a>
    </div>
  );
}

export default AboutMe;
