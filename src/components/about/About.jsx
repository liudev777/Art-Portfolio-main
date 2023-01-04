import "./about.scss"
import CardView from "../cardview/CardView"

export default function About() {
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent imperdiet semper ante nec rhoncus. Nulla ante ex, volutpat nec ipsum vel, interdum fermentum mi. Quisque eget diam in magna semper tristique ut vitae quam. Aliquam tempor sem vulputate justo tempor, ac sodales dolor sagittis. Nulla malesuada pulvinar malesuada. Aliquam quis est nec elit eleifend iaculis. Nam hendrerit dui ut tellus malesuada, ut condimentum ex ullamcorper. Praesent vitae auctor tellus."
  return (
    <>
      <div className="about">
        <div className="top">
          <div className="pfp"></div>
          <div className="title">ABOUT</div>
        </div>
        <CardView desc={desc}/>
      </div>
    </>
  )
}
