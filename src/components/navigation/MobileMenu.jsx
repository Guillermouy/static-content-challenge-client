import React from "react";
import NavMenu from "./NavMenu";

const MobileMenu = ({
  isOpen,
  navItems,
  location,
  openMenus,
  handleNavigation,
  toggleSubmenu,
}) => {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu md:hidden absolute top-16 left-0 right-0 bg-theme-dark-blue z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <NavMenu
          navItems={navItems}
          location={location}
          openMenus={openMenus}
          handleNavigation={handleNavigation}
          toggleSubmenu={toggleSubmenu}
          isMobile={true}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
