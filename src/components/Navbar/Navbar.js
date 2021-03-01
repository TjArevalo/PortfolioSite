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
        <a className="Navbar__portfolio" href="Resume.pdf" download>
          Resume
        </a>
        <a
          className="Navbar__email"
          href="mailto:timothyjamesarevalo@gmail.com"
        >
          Contact Me!
        </a>
      </div>
    </div>
  );
}
