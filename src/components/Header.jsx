import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>

      <Link 
        to="/"
        className="site-logo"
      >
        SinapShot
      </Link>
      <nav>
        <NavLink 
          to="/about"
        >
          About
        </NavLink>
        <NavLink 
          to="/work"
        >
          Work
        </NavLink>
        <NavLink 
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}


