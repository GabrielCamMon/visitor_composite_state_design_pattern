import React from "react";
import logo from "./logo.png";
import "./styles.css";

const Logo = () => (
  <div className="header-content_logo">
    <div>
      <img src={logo} alt="logo" />
      <span>
        <b>Taste</b>
      </span>
    </div>
    <p>
      <b>Gcamon & Lívia</b>
    </p>
  </div>
);

export default Logo;
