import "./cover.scss"

//img
const placeholder = require("../../assets/placeholder.jpg");
const landscape = require("../../assets/landscape.jpg");

export default function Cover() {
  return (
    <div className="cover" id="cover">
      <div className="profile">
        <div className="pfp"></div>
        <div className="name">Devin Liu</div>
        <div className="status">Student, Illustrator, Programmer</div>
        <div className="location">Chicago, IL</div>
        <div className="social"></div>
      </div>

      {/* <img src={landscape} alt="placeholder" /> */}
    </div>
  )
}
