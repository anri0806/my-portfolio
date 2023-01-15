import NavBar from "./NavBar";

import htmlLogo from "../images/html5.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import rubyLogo from "../images/ruby.png";
import githubLogo from "../images/github-mark.png";
import railsLogo from "../images/rails.png";
import postgresLogo from "../images/PostgreSQL.png";
import bootstrapLogo from "../images/bootstrap.png";

import brushImg3 from "../images/brush3.png";


function Skills() {
  return (
    <div className="skills">
      {/* <NavBar /> */}

      <div id="skills-title">
        <p style={{ fontSize: "4vw" }}>02. </p>
        <p style={{ fontWeight: "900" }}>Skills</p>
      </div>

      {/* <div className="skills-container">
        <h4 className="skill-category">Front end</h4>
        <p className="skill">
          <img className="skills-logo" src={htmlLogo} alt="html" /> HTML
        </p>
        <p className="skill">
          <img
            style={{ width: "23px", padding: "0" }}
            src={cssLogo}
            alt="css"
          />{" "}
          CSS
        </p>
        <p className="skill">
          <img className="skills-logo" src={jsLogo} alt="js" /> Javascript
        </p>
        <p className="skill">
          <img className="skills-logo" src={reactLogo} alt="react" /> React
        </p>
        <p className="skill"> Redux</p>
        <p className="skill">
          <img className="skills-logo" src={bootstrapLogo} alt="bootstrap" />{" "}
          Bootstrap
        </p>
        <h4 className="skill-category">Back end</h4>
        <p className="skill">
          <img className="skills-logo" src={rubyLogo} alt="ruby" /> Ruby
        </p>
        <p className="skill">
          <img style={{ width: "40px" }} src={railsLogo} alt="rails" /> Rails
        </p>
        <p className="skill">Bcrypt</p>
        <p className="skill">
          <img className="skills-logo" src={postgresLogo} alt="PostgreSQL" />{" "}
          PostgreSQL
        </p>
        <p className="skill">SQLite</p>
        <h4 className="skill-category">Others</h4>
        <p className="skill">
          <img className="skills-logo" src={githubLogo} alt="github" /> GitHub
        </p>
        <p className="skill"> AWS</p>
        <p className="skill"> Firebase</p>
      </div> */}

      <img id="skills-brush" src={brushImg3} alt="brush 3" />
    </div>
  );
}

export default Skills;
