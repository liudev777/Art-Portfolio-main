import React from 'react'
import NLinks from './NLinks'
import {MdMenu, MdClose} from "react-icons/md"
import { useState } from 'react';


export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuIcon = <MdMenu className="hamburger"
                    color= "white" 
                    size= "35px"
                    onClick={() => setOpen(!open)}
                    />
  const closeIcon = <MdClose className="close"
                    color= "white" 
                    size= "35px"
                    onClick={() => setOpen(!open)}
                    />

  const closeMobileMenu = () => setOpen(false)
  return (
    <> 
      {open ? closeIcon : menuIcon}
      {open && <NLinks isMobile={true} closeMobileMenu={closeMobileMenu}/>}
    </>
  )
}
