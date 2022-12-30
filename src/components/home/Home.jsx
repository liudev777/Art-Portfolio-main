import "./home.scss"
import Greeting from "../greeting/Greeting"
import Gallery from "../gallery/Gallery"
import Cover from "../cover/Cover"
import Footer from "../footer/Footer"

import React from 'react'

export default function Home() {
  return (
    <div className="home">
        <Cover />
        <Greeting />
        <Gallery />
        <Footer />
    </div>
  )
}

