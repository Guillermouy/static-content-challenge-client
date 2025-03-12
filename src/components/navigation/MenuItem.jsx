import React from "react";
import NestedMenuItem from "./NestedMenuItem";

const MenuItem = ({
  item,
  location,
  openMenus,
  handleNavigation,
  toggleSubmenu,
}) => {
  const hasChildren = Object.keys(item.children).length > 0;
  const isOpen = openMenus[item.path];

  return (
    <li className="relative">
      <a
        href={item.path}
        onClick={(e) => {
          if (hasChildren) {
            toggleSubmenu(item.path, e);
          } else {
            handleNavigation(e, item.path);
          }
        }}
        className={`hover:text-theme-yellow transition-colors ${
          location.pathname === item.path ? "text-theme-yellow" : ""
        }`}
      >
        {item.title}
        {hasChildren && <span className="ml-1">{isOpen ? "▲" : "▼"}</span>}
      </a>

      {hasChildren && isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-theme-dark-blue rounded-md shadow-lg py-1 z-10">
          {Object.values(item.children).map((child) => (
            <NestedMenuItem
              key={child.path}
              item={child}
              location={location}
              handleNavigation={handleNavigation}
              openMenus={openMenus}
              toggleSubmenu={toggleSubmenu}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;
