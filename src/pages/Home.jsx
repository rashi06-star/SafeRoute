import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Home.css";

export default function Home() {
  return (
    <div>
     <div className="hero">
      <h1>SafeRoute</h1>
      <h2>Your Safety, One Click Away</h2>

      <p>
        Find Help, report emergencies and get assistance when you need it.
      </p>
      </div>

      {/* CLICKABLE CARDS */}
      <div className="features">

        <Link to="/emergency" className="feature-link">
          <div className="feature-card">
            <h3>🚨 Emergency Support</h3>
            <p>Quick access to important emergency options.</p>
          </div>
        </Link>


        <Link to="/find-help" className="feature-link">
          <div className="feature-card">
            <h3>🔎 Find Help</h3>
            <p>Search for the type of assistance you need.</p>
          </div>
        </Link>


        <Link to="/guide" className="feature-link">
          <div className="feature-card">
            <h3>🛡️ Safety Guide</h3>
            <p>Get simple guidance for common emergency situations.</p>
          </div>
        </Link>

      </div>

    </div>
  )
}