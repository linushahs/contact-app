import { useState } from "react";
import { Link } from "react-router-dom";
import { MdAddBox, MdCancel } from "react-icons/md";

function Header({ isClicked, buttonHandler }) {
  return (
    <div className="header">
      <div className="header-title">
        <span style={{ color: "rgb(77, 179, 77)" }}>Contact</span> App
      </div>

      {isClicked ? (
        <Link to={"/"}>
          <MdCancel
            className="cancel-icon"
            onClick={() => buttonHandler(false)}
          />
        </Link>
      ) : (
        <Link to="/add">
          <MdAddBox className="add-icon" onClick={() => buttonHandler(true)} />
        </Link>
      )}
    </div>
  );
}

export default Header;
