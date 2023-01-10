import flagsWorld from "../images/flag-world.png";

function FlagsOfTheWorld() {
  return (
    <div className="project-box">
      <div className="project">
        <div className="default-image">
          <img src={flagsWorld} alt="flags of the world" />
        </div>
        <div className="hover-info">
          <h3>Flags of the World</h3>
          <p>
            A flag quiz game app that allows users to learn country flags and
            test their knowledge.
          </p>
          {/* <a href="">
            <p>demo</p>
          </a> */}
          <a href="https://github.com/anri0806/flags-of-the-world">
            <p>code</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FlagsOfTheWorld;
