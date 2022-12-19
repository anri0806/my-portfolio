import htmlLogo from "../images/HTML5_Logo_256.png";
import cssLogo from "../images/css.png";

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <img className="skills-logo" src={htmlLogo} alt="html" />
      <img className="skills-logo" src={cssLogo} alt="css" />
    </>
  );
}

export default Skills;
