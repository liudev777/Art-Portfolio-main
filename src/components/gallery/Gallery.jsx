import "./gallery.scss";
import imgArr from "../../assets/index.js"
//image
// const imgArr = []

// imgArr.push(require('../../assets/comm.png'));
// imgArr.push(require('../../assets/gwen copy.png'));
// imgArr.push(require('../../assets/qi design.png'));
// imgArr.push(require('../../assets/reol.png'));
// imgArr.push(require('../../assets/komi 31.png'));
// imgArr.push(require('../../assets/3d.png'));
// imgArr.push(require('../../assets/comm7.png'));
// imgArr.push(require('../../assets/komi 11.png'));
// imgArr.push(require('../../assets/landscape7.png'));
// imgArr.push(require('../../assets/landscape15.png'));
// imgArr.push(require('../../assets/princess.png'));
// imgArr.push(require('../../assets/pyro oc 2.png'));
// imgArr.push(require('../../assets/shinobu.png'));
// imgArr.push(require('../../assets'));
// imgArr.push(require('../../assets'));

export default function Gallery() {
  return (
    <div className="gallery">
      {imgArr.map((src) => <img key={src.src} src={src.src}/>)}
      
    </div>
  )
}
