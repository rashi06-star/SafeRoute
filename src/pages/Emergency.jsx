import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import "../style/Emergency.css"

export default function Emergency() {

  const [customContact] = useState(() => {
    const savedContact = localStorage.getItem("customEmergencyContact")
    return savedContact ? JSON.parse(savedContact) : null
  })

  const shareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
  
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
  
          const mapUrl =
            `https://www.google.com/maps?q=${latitude},${longitude}`
  
          window.open(mapUrl, "_blank")
        },
  
        () => {
          alert("Unable to access your location.")
        },
        {enableHighAccuracy: true, timeout:10000,maximumAge:0 }
      )
    } else {
      alert("Geolocation is not supported by your browser.")
    }
  }
  return (
    <div className="emergency-page">

      <div className="emergency-hero">

        <h1>🚨 Emergency</h1>

        <p>
          If you are in danger, choose an option below.
        </p>

      </div>

      <div className="emergency-options">

        <a href="tel:112" className="emergency-link">
          <button className="emergency-button">
            📞 Call Police 
          </button>
        </a>

        <a href="tel:112" className="emergency-link">
          <button className="emergency-button">
            🚑 Call Ambulance
          </button>
        </a>

        <a href="tel:112" className="emergency-link">
          <button className="emergency-button">
            🚒 Call Fire Service
          </button>
        </a>

        {customContact ? (
  <a
    href={`tel:${customContact.number}`}
    className="emergency-link"
  >
    <button className="emergency-button">
      ❤️ Call {customContact.name}
    </button>
  </a>
) : (
  <Link to="/contacts" className="emergency-link">
    <button className="emergency-button">
      ➕ Add Emergency Contact
    </button>
  </Link>
)}  

        <button
          className="location-button"
          onClick={shareLocation}
        >
          📍 Share My Location
        </button>

      </div>

      <div className="emergency-note">
        <h3>Stay Calm</h3>
        <p>
          Move to a safe place and contact the appropriate emergency service.
        </p>
      </div>

    </div>
  )
}