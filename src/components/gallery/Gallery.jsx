import "./gallery.scss";
import {imgArr} from "../../assets/index.js"
// console.log(imgArr);

export default function Gallery() {
  return (
    <div className="gallery">
      {imgArr.map(({src, description}) => <img key={src} src={src}/>)}
      
    </div>
  )
}
