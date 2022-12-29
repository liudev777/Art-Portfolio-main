import { NavLink, Outlet } from "react-router-dom";
import "./rootLayout.scss";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

import React from 'react'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <nav> 
        <h1>Devin Portfolio</h1>
        <div className="desktop">
          <DesktopNav />
        </div>
        <div className="mobile">
          <MobileNav />
        </div>
      </nav>

      <main>
          <Outlet />
      </main>
      
    </div>
  )
}
