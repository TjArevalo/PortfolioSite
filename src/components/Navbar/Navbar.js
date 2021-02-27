import React from "react";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const history = useHistory();
  function home() {
    history.push("/");
  }
  return (
    <div className="Navbar">
      <h1 className="Navbar__title" onClick={home}>
        TJ Arevalo
      </h1>
      <div className="Navbar__buttonBox">
        <button className="Navbar__portfolio">Resume</button>
        <button className="Navbar__email">Contact Me!</button>
      </div>
    </div>
  );
}
