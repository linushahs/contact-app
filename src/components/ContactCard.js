import { Link } from "react-router-dom";

function ContactCard(props) {
  const { name, email } = props.location.state.contact;
  return (
    <>
      <div className="card-container">
        <div className="upper-side">
          <img
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
            alt="Avatar"
            className="user-img"
          />
        </div>
        <div className="lower-side">
          <p>{name}</p>
          <span>{email}</span>
        </div>
      </div>

      <div className="back-to-contact">
        <Link to="/">
          <button className="btn back-btn">Back to Contact Lists</button>
        </Link>
      </div>
    </>
  );
}

export default ContactCard;
