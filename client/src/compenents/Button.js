// src/components/Button.js
import React from "react";
import { Link } from "react-router-dom";
import './Button.css'; // Import the CSS file

const Button = () => {
  return (
    <div className="button-container">
      <button><Link to="/contact">Contact</Link></button>
    </div>
  );
}

export default Button;
