import React from "react";

const HamburgerButton = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className="md:hidden hamburger-button p-2 focus:outline-none"
      onClick={toggleMenu}
      aria-label="Toggle mobile menu"
    >
      {isOpen ? (
        <>
          <div className="w-6 h-0.5 bg-white transform rotate-45 translate-y-1"></div>
          <div className="w-6 h-0.5 bg-white transform -rotate-45"></div>
        </>
      ) : (
        <>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </>
      )}
    </button>
  );
};

export default HamburgerButton;
