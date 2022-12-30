import "./cover.scss"

//img
const placeholder = require("../../assets/placeholder.jpg");
const landscape = require("../../assets/landscape.png");

export default function Cover() {
  return (
    <div className="cover" id="cover">
      <img src={landscape} alt="placeholder" />
    </div>
  )
}
