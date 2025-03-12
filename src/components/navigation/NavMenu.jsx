import React from "react";
import MenuItem from "./MenuItem";

const NavMenu = ({
  navItems,
  location,
  openMenus,
  handleNavigation,
  toggleSubmenu,
}) => {
  return (
    <nav className="main-nav">
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <MenuItem
            key={item.path}
            item={item}
            location={location}
            openMenus={openMenus}
            handleNavigation={handleNavigation}
            toggleSubmenu={toggleSubmenu}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
