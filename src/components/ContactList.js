import React from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";

function ContactList({ contacts, deleteContact }) {
  return (
    <div>
      <div className="container">
        <h2>Contacts List</h2>

        {contacts.map((contact) => (
          <div className="contact" key={contact.id}>
            <div className="left-side">
              <img src="" alt="" />
              <div className="detail">
                <Link
                  to={{
                    pathname: `/contact/${contact.id}`,
                    state: { contact: contact },
                  }}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <p>{contact.name}</p>
                  <span className="email">{contact.email}</span>
                </Link>
              </div>
            </div>
            <div className="right-side">
              <MdDelete
                className="delete-btn"
                onClick={() => deleteContact(contact.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
