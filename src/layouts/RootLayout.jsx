import { NavLink, Outlet } from "react-router-dom";
import "./rootLayout.scss"

import React from 'react'

export default function RootLayout() {
  return (
    <div className="root-layout">
        <nav> 
            <h1>Devin Portfolio</h1>
            <ul className="nav-item">
                <li><NavLink to="home" className="home-btn">Home</NavLink></li>
                
                <li><NavLink to="about" className="about-btn">About</NavLink></li>

                <li><NavLink to="contact" className="contact-btn">Contact</NavLink></li>
            </ul>
        </nav>

        <main>
            <Outlet />
        </main>
      
    </div>
  )
}
