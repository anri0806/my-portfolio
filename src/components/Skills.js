import htmlLogo from "../images/html5.png";
import cssLogo from "../images/css.png";
import jsLogo from "../images/js.png";
import reactLogo from "../images/react.png";
import rubyLogo from "../images/ruby.png";
import githubLogo from "../images/github-mark-black.png";
import railsLogo from "../images/rails.png";
import postgresLogo from "../images/PostgreSQL.png";
import bootstrapLogo from "../images/bootstrap.png";
import firebaseLogo from "../images/firebase.png";
import reduxLogo from "../images/redux.png";
import sqliteLogo from "../images/sqlite.png";
import awsLogo from "../images/aws.png";

import brushImg3 from "../images/brush3.png";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#e0c7b7" }} className="skills-logo">
            <img src={htmlLogo} alt="html" />
            <p className="skill">HTML</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#b7cee0" }} className="skills-logo">
            <img
              // style={{ width: "50%", height: "50%", margin: "15px" }}
              src={cssLogo}
              alt="css"
            />
            <p className="skill">CSS</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#f7f7e4" }} className="skills-logo">
            <img src={jsLogo} alt="js" />
            <p className="skill">Javascript</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#d2ecf7" }} className="skills-logo">
            <img src={reactLogo} alt="react" />
            <p className="skill">React</p>
          </div>
        </div>

        {/* <div className="skills-logo-container">
          <div style={{ backgroundColor: "#cdb3d7" }} className="skills-logo">
            <img src={reduxLogo} alt="redux" />
            <p className="skill"> Redux</p>
          </div>
        </div> */}
        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#e2cada" }} className="skills-logo">
            <img src={bootstrapLogo} alt="bootstrap" />
            <p className="skill">Bootstrap</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#d3adad" }} className="skills-logo">
            <img src={rubyLogo} alt="ruby" />
            <p className="skill">Ruby</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#dbb0cc" }} className="skills-logo">
            <img
              // style={{ width: "50px", height: "50px", margin: "15px" }}
              src={railsLogo}
              alt="rails"
            />
            <p className="skill">Rails</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#b0b9db" }} className="skills-logo">
            <img
              // style={{ width: "50px", height: "50px", margin: "15px" }}
              src={postgresLogo}
              alt="PostgreSQL"
            />
            <p className="skill">PostgreSQL</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#b0cfdb" }} className="skills-logo">
            <img src={sqliteLogo} alt="sqlite" />
            <p className="skill">SQLite</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#cacfd2" }} className="skills-logo">
            <img src={githubLogo} alt="github" />
            <p className="skill">GitHub</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#d8c7b2" }} className="skills-logo">
            <img
              // style={{ width: "60%", height: "50%", margin: "20px 15px" }}
              src={awsLogo}
              alt="aws"
            />
            <p className="skill"> AWS</p>
          </div>
        </div>

        <div className="skills-logo-container">
          <div style={{ backgroundColor: "#d8c9b2" }} className="skills-logo">
            <img src={firebaseLogo} alt="firebase" />
            <p className="skill">Firebase</p>
          </div>
        </div>
      </div>

      <div id="skills-title">
        <p style={{ fontSize: "4vw" }}>02. </p>
        <p style={{ fontWeight: "900" }}>Skills</p>
      </div>

      <img id="skills-brush" src={brushImg3} alt="brush 3" />
    </section>
  );
}

export default Skills;
