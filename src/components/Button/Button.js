import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Button = ({ children, link, ...props }) => {
  if (link) {
    return (
      <Link {...props} className="button" to={link}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className="button">
      {children}
    </button>
  );
};
