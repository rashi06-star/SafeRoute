import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../style/FindHelp.css";

export default function FindHelp() {

  const [search, setSearch] = useState("")
  const [selectedHelp, setSelectedHelp] = useState("")

  const helpOptions = [
    "Police",
    "Hospital",
    "Mechanic",
    "Women Help",
    "Other Emergency",
    "Not Sure"
  ]

  const backToOptions = () => {
    setSelectedHelp("")
    setSearch("")
  }

  return (
    <div className="find-help-page">

      <div className="page-header">
        <h1>Find Help</h1>
        <p>Select the type of help you need.</p>
      </div>

      {/* SEARCH */}

      {!selectedHelp && (
        <div className="help-search">
          <input
            type="text"
            placeholder="🔎 Search for help..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}

      {/* HELP OPTIONS */}

      {!selectedHelp && (
        <div className="help-options">

          {helpOptions
            .filter((option) =>
              option.toLowerCase().includes(search.toLowerCase())
            )
            .map((option) => (

              <div
                className="help-card"
                key={option}
                onClick={() => setSelectedHelp(option)}
              >
                <h3>{option}</h3>
                <span>View assistance →</span>
              </div>

            ))}

        </div>
      )}

      {/* NOT SURE */}

      {selectedHelp === "Not Sure" && (
        <div className="help-result">

          <h2>Not Sure What You Need?</h2>

          <p>
            Don't worry. Move to a safe place and choose the option
            that best matches your situation.
          </p>

          <div className="help-actions">

            <Link to="/guide">
              <button className="primary-btn">
                📖 View Safety Guide
              </button>
            </Link>

            <Link to="/emergency">
              <button className="danger-btn">
                🚨 Emergency Options
              </button>
            </Link>

            <button
              className="secondary-btn"
              onClick={backToOptions}
            >
              ⬅ Back to Help Options
            </button>

          </div>

        </div>
      )}

      {/* POLICE */}

      {selectedHelp === "Police" && (
        <div className="help-result">

          <h2>Police Assistance</h2>

          <p>
            If you are facing a safety issue, move to a safe place
            and contact the police.
          </p>

          <div className="help-actions">

            <a href="tel:112">
              <button className="danger-btn">
                📞 Call Emergency - 112
              </button>
            </a>

            <button
              className="secondary-btn"
              onClick={backToOptions}
            >
              ⬅ Back to Help Options
            </button>

          </div>

        </div>
      )}

      {/* HOSPITAL */}

      {selectedHelp === "Hospital" && (
        <div className="help-result">

          <h2>Medical Assistance</h2>

          <p>
            For a medical emergency, seek medical help immediately.
          </p>

          <div className="help-actions">

            <a href="tel:112">
              <button className="danger-btn">
                📞🚑 Call Emergency - 112
              </button>
            </a>

            <button
              className="secondary-btn"
              onClick={backToOptions}
            >
              ⬅ Back to Help Options
            </button>

          </div>

        </div>
      )}

      {/* MECHANIC */}

      {selectedHelp === "Mechanic" && (
        <div className="help-result">

          <h2>Vehicle Assistance</h2>

          <p>
            Move your vehicle to a safe location and find a nearby mechanic.
          </p>

          <div className="help-actions">

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
                    }

                  )

                } else {
                  alert("Location is not supported by this browser.")
                }

              }}
            >
              🔧 Find Nearby Mechanic
            </button>

            <button
              className="secondary-btn"
              onClick={backToOptions}
            >
              ⬅ Back to Help Options
            </button>

          </div>

        </div>
      )}

      {/* WOMEN HELP */}

      {selectedHelp === "Women Help" && (
        <div className="help-result">

          <h2>Safety Assistance</h2>

          <p>
            Move towards a safe populated place and contact someone you trust.
          </p>

          <h3>Get Help</h3>

          <div className="help-actions">

            <a href="tel:181">
              <button className="primary-btn">
                📞 Women Helpline - 181
              </button>
            </a>

            <a href="tel:112">
              <button className="danger-btn">
                🚨 Emergency - 112
              </button>
            </a>

            <Link to="/contacts">
              <button className="secondary-btn">
                📱 Emergency Contacts
              </button>
            </Link>

            <button
              className="secondary-btn"
              onClick={backToOptions}
            >
              ⬅ Back to Help Options
            </button>

          </div>

        </div>
      )}

      {/* OTHER EMERGENCY */}

      {selectedHelp === "Other Emergency" && (
        <div className="help-result">

          <h2>Emergency Assistance</h2>

          <p>
            Move to a safe location and contact the appropriate
            emergency service.
          </p>

          <div className="help-actions">

            <a href="tel:112">
              <button className="danger-btn">
                🚨 Call Emergency - 112
              </button>
            </a>

            <Link to="/guide">
              <button className="primary-btn">
                📖 View Safety Guide
              </button>
            </Link>

            <Link to="/contacts">
              <button className="secondary-btn">
                📱 Emergency Contacts
              </button>
            </Link>

            <button
              className="secondary-btn"
              onClick={backToOptions}>
              ⬅ Back to Help Options
            </button>
          </div>
        </div>
      )}
    </div>
  )}