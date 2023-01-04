import React from 'react'
import { NavLink, Outlet } from "react-router-dom";

export default function NLinks(props) {
  return (
    <ul className="nav-item">
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="" className="home-btn">Home</NavLink></li>
        
        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="about" className="about-btn">About</NavLink></li>

        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="commission" className="commission-btn">Commission</NavLink></li>

        <li onClick={() => props.isMobile && props.closeMobileMenu()}><NavLink to="contact" className="contact-btn">Contact</NavLink></li>

    </ul>
  )
}
