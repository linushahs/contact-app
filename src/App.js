import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import { uuid } from "uuidv4";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactCard from "./components/ContactCard";

function App() {
  const LOCALSTORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [flag, setFlag] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (retrieveContacts) {
      setContacts(retrieveContacts);
      setFlag(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="App">
      <Router>
        <Header isClicked={isClicked} buttonHandler={setIsClicked} />
        <Switch>
          <Route
            path="/add"
            render={(props) => (
              <AddContact
                contactHandler={addContact}
                buttonHandler={setIsClicked}
                {...props}
              />
            )}
          />
          {flag ? (
            <Route
              path="/"
              exact
              render={(props) => (
                <ContactList
                  contacts={contacts}
                  deleteContact={deleteContact}
                  {...props}
                />
              )}
            />
          ) : (
            <p>No Contacts yet.</p>
          )}
          <Route
            path="/contact/:id"
            render={(props) => <ContactCard {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
