import "./gallery.scss";

//image
const placeholder = require('../../assets/placeholder.jpg');

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={placeholder} alt="placeholder"/>
      <img src={placeholder} alt="placeholder"/>
      <img src={placeholder} alt="placeholder"/>
      <img src={placeholder} alt="placeholder"/>
      <img src={placeholder} alt="placeholder"/>
    </div>
  )
}
