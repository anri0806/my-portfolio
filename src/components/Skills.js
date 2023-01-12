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
import skillsTitle from "../images/skills-title.png";

function Skills() {
  return (
    <div className="skills">
      {/* <NavBar /> */}
      <img className="skills-title" src={skillsTitle} alt="skills" />
      <div className="skills-container">
        <h4 className="skill-category">Front end</h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={htmlLogo} alt="html" />  */}
          HTML
        </h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={cssLogo} alt="css" />  */}
          CSS
        </h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={jsLogo} alt="js" />  */}
          Javascript
        </h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={reactLogo} alt="react" /> */}
          React
        </h4>
        <h4 className="skill">Redux</h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={bootstrapLogo} alt="bootstrap" /> */}
          Bootstrap
        </h4>
        <h4 className="skill-category">Back end</h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={rubyLogo} alt="ruby" /> */}
          Ruby
        </h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={railsLogo} alt="rails" />  */}
          Rails
        </h4>
        <h4 className="skill">Bcrypt</h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={postgresLogo} alt="PostgreSQL" /> */}
          PostgreSQL
        </h4>
        <h4 className="skill">SQLite</h4>
        <h4 className="skill-category">Others</h4>
        <h4 className="skill">
          {/* <img className="skills-logo" src={githubLogo} alt="github" />  */}{" "}
          GitHub
        </h4>
        <h4 className="skill">
          AWS
        </h4>
        <h4 className="skill">
          Firebase
        </h4>
      </div>
    </div>
  );
}

export default Skills;
