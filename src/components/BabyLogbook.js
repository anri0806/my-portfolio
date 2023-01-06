import babyLogBook from "../images/baby-logbook.png";

function BabyLogbook() {
  return (
    <div className="project-box">
      <div className="project-container">
        <div className="default-image">
          <img src={babyLogBook} alt="baby logbook" />
        </div>
        <div className="hover-info">
          <h3>Baby Logbook</h3>
          <p>
            A daily tracker where parents can record their baby's milestones,
            doctor appointments and immunizations.
          </p>
          <a href="https://youtu.be/NNqnDEDgGkM">
            <p>demo</p>
          </a>
          <a href="https://github.com/anri0806/baby_logbook_frontend">
            <p>code</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default BabyLogbook;
