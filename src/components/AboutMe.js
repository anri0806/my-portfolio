import travelLogo from "../images/travel-and-tourism.png";
import hikingLogo from "../images/hiking.png";
import gameLogo from "../images/game-console.png";
import dogLogo from "../images/boston-terrier.png";
import exerciseLogo from "../images/exercises.png";
import carpenterLogo from "../images/carpenter.png";
import pianoLogo from "../images/piano.png";


function AboutMe() {
  return (
    <>
      <br />
      <h1>AboutMe</h1>
      <p>
        Hello! My name is Anri and I am a Full Stack Software Developer with a
        background in the Hospitality and Real Estate industry. My interest in
        programming and technology began in the middle school. I created my very
        first website using simple HTML and completely fell in love with coding.
        Although I decided to pursue a different career, I continued to have
        passion in programing. While working in the Hospitality and Real Estate
        industry, I helped the company that I worked for to update their website
        using a cloud-based website builder. Doing this brought me back to the
        moment where I touched code for the first time. During pandemic I
        finally decided to pursue my passion and enrolled in the Flatiron
        School's Full Stack Web Development Program where I fell in love with
        programming again.
      </p>
      <p>
        I believe that the passion can be driving force to learn more and give
        me all important sense of purpose to be the best possible version of me.
      </p>
      <p>Aside from work, my passions are:</p>
      <img className="about-me-logo" src={travelLogo} alt="traveling" />
      <img className="about-me-logo" src={hikingLogo} alt="hiking" />
      <img className="about-me-logo" src={gameLogo} alt="game" />
      <img className="about-me-logo" src={dogLogo} alt="boston terrier" />
      <img className="about-me-logo" src={exerciseLogo} alt="exercise" />
      <img className="about-me-logo" src={carpenterLogo} alt="build and make things" />
      <img className="about-me-logo" src={pianoLogo} alt="playing piano" />


      <br />
      <a href="https://www.flaticon.com" title="icons">
        Icons created by Flaticon
      </a>
    </>
  );
}

export default AboutMe;
