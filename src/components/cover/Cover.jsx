import "./cover.scss"

//img
const placeholder = require("../../assets/placeholder.jpg");

export default function Cover() {
  return (
    <div className="cover" id="cover">
      <img src={placeholder} alt="placeholder" />
    </div>
  )
}
