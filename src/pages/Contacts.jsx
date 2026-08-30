import React, { useState } from 'react'
import "../style/Contact.css";

export default function Contacts() {

  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [editMode, setEditMode] = useState(false)

  const [customContact, setCustomContact] = useState(() => {
    const savedContact = localStorage.getItem("customEmergencyContact")
    return savedContact ? JSON.parse(savedContact) : null
  })

  const [showForm, setShowForm] = useState(false)

  const contacts = [
    {
      name: "Police",
      number: "112"
    },
    {
      name: "Ambulance",
      number: "112"
    },
    {
      name: "Fire Station",
      number: "112"
    }
  ]

  return (
    <div className="contacts-page">

      {/* HEADER */}

      <div className="page-header">
        <h1>Emergency Contacts</h1>
        <p>Keep important contacts ready when you need help.</p>
      </div>


      {/* ADD CONTACT BUTTON */}
     {!customContact && (
      <div className="contacts-add">
        <button
          className="primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          ➕ Add Custom Emergency Contact
        </button>
      </div>
     )}

      {/* ADD CONTACT FORM */}

      {showForm && (
        <div className="contact-form">

          <h2>Add Your Emergency Contact</h2>

          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Enter phone number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <button
            className="primary-btn"
            onClick={() => {

              if (name && number) {

                const contact = {
                  name: name,
                  number: number
                }

                setCustomContact(contact)

                localStorage.setItem(
                  "customEmergencyContact",
                  JSON.stringify(contact)
                )

                setName("")
                setNumber("")
                setShowForm(false)

              } else {
                alert("Please enter name and phone number")
              }

            }}
          >
            💾 Save Contact
          </button>

        </div>
      )}


      {/* DEFAULT CONTACTS */}

      <div className="contacts-grid">

        {contacts.map((contact) => (

          <div className="contact-card" key={contact.name}>

            <h2>{contact.name}</h2>

            <p>{contact.number}</p>

          </div>

        ))}

      </div>


      {/* CUSTOM CONTACT */}

      {customContact && (

        <div className="custom-contact-section">

          <h2>Your Custom Emergency Contact</h2>

          {editMode ? (

            <div className="contact-form">

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="tel"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />

              <button
                className="primary-btn"
                onClick={() => {

                  if (name && number) {

                    const updatedContact = {
                      name: name,
                      number: number
                    }

                    setCustomContact(updatedContact)

                    localStorage.setItem(
                      "customEmergencyContact",
                      JSON.stringify(updatedContact)
                    )

                    setName("")
                    setNumber("")
                    setEditMode(false)

                  } else {
                    alert("Please enter name and phone number")
                  }

                }}
              >
                💾 Save Changes
              </button>

            </div>

          ) : (

            <div className="custom-contact-card">

              <h2>{customContact.name}</h2>

              <p>{customContact.number}</p>

              <div className="contact-actions">

                <a href={`tel:${customContact.number}`}>
                  <button className="danger-btn">
                    📞 Call {customContact.name}
                  </button>
                </a>

                <button
                  className="secondary-btn"
                  onClick={() => {
                    setName(customContact.name)
                    setNumber(customContact.number)
                    setEditMode(true)
                  }}
                >
                  ✏️ Edit Contact
                </button>

                <button
                  className="delete-btn"
                  onClick={() => {
                    setCustomContact(null)
                    localStorage.removeItem("customEmergencyContact")
                  }}
                >
                  🗑️ Delete Contact
                </button>

              </div>

            </div>

          )}

        </div>

      )}

    </div>
  )
}