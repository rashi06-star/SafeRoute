import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/Guide.css";

export default function Guide() {

  const [selectedGuide, setSelectedGuide] = useState("")

  return (
    <div className="guide-page">

      <div className="page-header">
        <h1>Safety Guide</h1>
        <p>Select your situation to get quick safety guidance.</p>
      </div>

      <div className="guide-options">

        <button
          className="guide-card"
          onClick={() => setSelectedGuide("accident")}
        >
          🚗
          <span>Road Accident</span>
        </button>

        <button
          className="guide-card"
          onClick={() => setSelectedGuide("breakdown")}
        >
          🔧
          <span>Car Breakdown</span>
        </button>

        <button
          className="guide-card"
          onClick={() => setSelectedGuide("unsafe")}
        >
          🛡️
          <span>Feeling Unsafe</span>
        </button>

      </div>

      {/* ROAD ACCIDENT */}

      {selectedGuide === "accident" && (
        <div className="guide-result">

          <h2>🚗 Road Accident</h2>

          <p>
            Move to a safe place and contact emergency services.
          </p>

          <p>
            If anyone is injured, call for emergency medical assistance.
          </p>

          <div className="guide-actions">

            <a href="tel:112">
              <button className="danger-btn">
                🚑 Call Ambulance - 112
              </button>
            </a>

            <Link to="/contacts">
              <button className="secondary-btn">
                📱 Emergency Contacts
              </button>
            </Link>

          </div>

        </div>
      )}

      {/* CAR BREAKDOWN */}

      {selectedGuide === "breakdown" && (
        <div className="guide-result">

          <h2>🔧 Car Breakdown</h2>

          <p>
            Move your vehicle to a safe location and look for assistance.
          </p>

          <p>
            Turn on your hazard lights and avoid standing in the middle of the road.
          </p>

          <button
            className="primary-btn"
            onClick={() => {

              if (navigator.geolocation) {

                navigator.geolocation.getCurrentPosition(
                  (position) => {

                    const latitude = position.coords.latitude
                    const longitude = position.coords.longitude

                    const mapUrl =
                      `https://www.google.com/maps/search/mechanic/@${latitude},${longitude},15z`

                    window.open(mapUrl, "_blank")
                  },

                  () => {
                    alert("Unable to access your location.")
                  },

                  {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                  }
                )

              } else {
                alert("Geolocation is not supported by your browser.")
              }

            }}
          >
            🔧 Find Nearby Mechanic
          </button>

        </div>
      )}

      {/* FEELING UNSAFE */}

      {selectedGuide === "unsafe" && (
        <div className="guide-result">

          <h2>🛡️ Feeling Unsafe?</h2>

          <p>
            Move towards a safe and populated place and contact someone you trust.
          </p>

          <h3>Get Help</h3>

          <div className="guide-actions">

            <a href="tel:112">
              <button className="danger-btn">
                📞 Emergency Helpline - 112
              </button>
            </a>

            <a href="tel:181">
              <button className="primary-btn">
                📞 Women Helpline - 181
              </button>
            </a>

            <Link to="/contacts">
              <button className="secondary-btn">
                📱 View Emergency Contacts
              </button>
            </Link>

          </div>

        </div>
      )}

    </div>
  )
}