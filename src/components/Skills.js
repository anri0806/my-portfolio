import NavBar from "./NavBar";

import htmlLogo from "../images/html.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import rubyLogo from "../images/ruby.png";
import githubLogo from "../images/github-mark.png";
import railsLogo from "../images/rails.png";
import nodeLogo from "../images/nodeJS.png";
import postgresLogo from "../images/PostgreSQL.png";
import bootstrapLogo from "../images/bootstrap.png";

function Skills() {
  return (
    <>
      <NavBar />
      <h1>Skills</h1>
      <img className="skills-logo" src={htmlLogo} alt="html" />
      <img className="skills-logo" src={cssLogo} alt="css" />
      <img className="skills-logo" src={jsLogo} alt="js" />
      <img className="skills-logo" src={reactLogo} alt="react" />
      <img className="skills-logo" src={rubyLogo} alt="ruby" />
      <img className="skills-logo" src={railsLogo} alt="rails" />
      <img className="skills-logo" src={githubLogo} alt="github" />
      <img className="skills-logo" src={nodeLogo} alt="nodeJS" />
      <img className="skills-logo" src={postgresLogo} alt="PostgreSQL" />
      <img className="skills-logo" src={bootstrapLogo} alt="bootstrap" />
    </>
  );
}

export default Skills;
