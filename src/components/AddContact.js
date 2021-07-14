import { useState } from "react";

function AddContact(props) {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const addContact = (e) => {
    e.preventDefault();

    if (nameInput === "" || emailInput === "") {
      return;
    }

    const newInput = {
      name: nameInput,
      email: emailInput,
    };

    props.contactHandler(newInput);
    setNameInput("");
    setEmailInput("");
    props.history.push("/");
    props.buttonHandler(false);
  };

  return (
    <form className="container" onSubmit={addContact}>
      Name:
      <input
        type="text"
        onChange={(e) => handleChange(e, setNameInput)}
        className="input-elem"
        value={nameInput}
      />
      Email:
      <input
        type="text"
        className="input-elem"
        onChange={(e) => handleChange(e, setEmailInput)}
        value={emailInput}
      />
      <button className="btn add-btn"> Add </button>
    </form>
  );
}

export default AddContact;
