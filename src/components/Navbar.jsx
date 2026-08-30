import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <img src="/SafeRoute-BLUE2.png" alt="SafeRoute Logo" />
        <span>SafeRoute</span>
      </div>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/find-help">Find Help</Link>
        <Link to="/emergency">Emergency</Link>
        <Link to="/guide">Safety Guide</Link>
        <Link to="/contacts">Contacts</Link>
      </div>

    </nav>
  )
}