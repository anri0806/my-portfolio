import HomeNavBar from "./HomeNavBar";

import brushImg from "../images/home-brush.png";

function Home() {
  return (
    <div className="home">
      <p id="home-my-name">Anri Kawahara</p>
      <HomeNavBar />
      <img id="home-brush" src={brushImg} alt="brush" />
      <p id="home-job-title">Full Stack Software Engineer</p>
    </div>
  );
}

export default Home;
