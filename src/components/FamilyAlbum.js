import familyAlbum from "../images/family-album.png";

function FamilyAlbum() {
  return (
    <div className="project-box">
      <div className="project-container">
        <div className="default-image">
          <img src={familyAlbum} alt="family album" />
        </div>
        <div className="hover-info">
          <h3>Family Album</h3>
          <p>
            A photo album app where users can organize and safely share photos
            with family and friends.
          </p>
          <a href="https://youtu.be/2WOkl2WyfqE">
            <p>demo</p>
          </a>
          <a href="https://github.com/anri0806/family-album">
            <p>code</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FamilyAlbum;
