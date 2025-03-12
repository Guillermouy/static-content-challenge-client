import React from "react";

const Logo = ({ handleNavigation }) => {
  return (
    <h1 className="text-2xl font-bold text-theme-yellow">
      <a href="/" onClick={(e) => handleNavigation(e, "/")}>
        Acme Co
      </a>
    </h1>
  );
};

export default Logo;
