import "./gallery.scss";
import {imgArr} from "../../assets/index.js"
// console.log(imgArr);

export default function Gallery() {
  return (
    <div className="gallery-div">
      <h1>GALLERY</h1>
      <div className="gallery">
        {imgArr.map(({src, title, description}) =>
          <div className="container" onClick={() => console.log(description)}>
            <img key={src} src={src} /> 
            <div className="cover">
              <h3 className="title">{title}</h3>
              <div className="overlay"></div>
            </div>
          </div>)}
      </div>
    </div>
  )
}
