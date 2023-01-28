import Carousel from "react-bootstrap/Carousel";


import profilePic1 from "../images/about-me-pic1.jpeg";
import profilePic2 from "../images/about-me-pic2.jpeg";
import profilePic3 from "../images/about-me-pic3.jpeg";
import brushImg2 from "../images/brush2.png";

import travelLogo from "../images/travel-and-tourism.png";
import hikingLogo from "../images/hiking.png";
import gameLogo from "../images/game-console.png";
import dogLogo from "../images/boston-terrier.png";
import exerciseLogo from "../images/exercises.png";
import carpenterLogo from "../images/carpenter.png";
import pianoLogo from "../images/piano.png";
import flagLogo from "../images/countries.png";

function AboutMe() {

  return (
    <section className="about-me" id="about-me">
      <div className="bio">
        <div id="about-me-title">
          <p style={{ fontSize: "4vw" }}>01. </p>
          <p style={{ fontWeight: "900" }}>About</p>
          <p> Me</p>
        </div>

        <p>
          Hello! My name is <b>Anri Kawahara</b> and I was born and raised in{" "}
          <b>Japan</b>🇯🇵 I am a <b>Full Stack Software Developer</b> with a
          background in the Hospitality and Real Estate industry. My interest in
          the programming and technology began in the middle school. I created my
          very first website using HTML and{" "}
          <b>completely fell in love with coding</b>. During the pandemic, I finally
          decided to pursue my passion and enrolled in the Flatiron School's
          Full Stack Web Development Program, where I fell in love with
          programming again!
        </p>
        <p>
          I believe that the <b>passion is the driving force of success</b>{" "}
          and it gives me a sense of purpose to be{" "}
          <b>the best possible version of me</b>.
        </p>
      </div>

      <Carousel className="carousel">
        <Carousel.Item>
          <img className="carousel-img" src={profilePic1} alt="profile1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={profilePic3} alt="profile3" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={profilePic2} alt="profile2" />
        </Carousel.Item>
      </Carousel>
      <img id="carousel-brush" src={brushImg2} alt="brush 2" />

      <div id="about-me-icons">
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={travelLogo} alt="traveling" />
          <p>traveling</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={hikingLogo} alt="hiking" />
          <p>hiking</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={gameLogo} alt="game" />
          <p>playing video games</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={dogLogo} alt="boston terrier" />
          <p>my dog</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={exerciseLogo} alt="exercise" />
          <p>working out</p>
        </div>
        <div className="about-me-hobby-icon">
          <img
            className="about-me-logo"
            src={carpenterLogo}
            alt="building things"
          />
          <p>building things</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={pianoLogo} alt="piano" />
          <p>playing piano</p>
        </div>
        <div className="about-me-hobby-icon">
          <img className="about-me-logo" src={flagLogo} alt="county flags" />
          <p>memorizing country flags</p>
        </div>
      </div>
      <a href="https://www.flaticon.com" title="icons">
        Icons created by Flaticon
      </a>
    </section>
  );
}

export default AboutMe;
