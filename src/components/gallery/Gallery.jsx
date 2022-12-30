import "./gallery.scss";

//image
const placeholder = require('../../assets/placeholder.jpg');
const img1 = require('../../assets/comm.png');
const img2 = require('../../assets/gwen copy.png');
const img3 = require('../../assets/qi design.png');
const img4 = require('../../assets/reol.png');
const img5 = require('../../assets/komi 31.png');

export default function Gallery() {
  return (
    <div className="gallery">
      <img src={img1} alt="placeholder"/>
      <img src={img2} alt="placeholder"/>
      <img src={img3} alt="placeholder"/>
      <img src={img4} alt="placeholder"/>
      <img src={img5} alt="placeholder"/>
    </div>
  )
}
