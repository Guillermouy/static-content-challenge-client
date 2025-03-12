import React from "react";
import { useLocation } from "react-router-dom";
import useNavigation from "../hooks/useNavigation";
import { useNavigationData } from "../hooks/useNavigationData";
import { useMenuToggle } from "../hooks/useMenuToggle";
import NavMenu from "./navigation/NavMenu";
import Logo from "./navigation/Logo";

const Header = () => {
  const location = useLocation();
  const { handleNavigation } = useNavigation();
  const { navItems } = useNavigationData();
  const { openMenus, toggleSubmenu } = useMenuToggle([location.pathname]);

  return (
    <header className="bg-theme-dark-blue text-theme-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo handleNavigation={handleNavigation} />
        <NavMenu
          navItems={navItems}
          location={location}
          openMenus={openMenus}
          handleNavigation={handleNavigation}
          toggleSubmenu={toggleSubmenu}
        />
      </div>
    </header>
  );
};

export default Header;
