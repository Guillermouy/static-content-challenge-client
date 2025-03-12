import React, { useState, useEffect, useRef } from "react";

const NestedMenuItem = ({
  item,
  location,
  handleNavigation,
  openMenus,
  toggleSubmenu,
}) => {
  const hasChildren = Object.keys(item.children).length > 0;
  const isOpen = openMenus[item.path];
  const menuRef = useRef(null);
  const [shouldAlignRight, setShouldAlignRight] = useState(false);

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      setShouldAlignRight(rect.left > windowWidth - 200);
    }
  }, [isOpen]);

  return (
    <li className="relative" ref={menuRef}>
      <a
        href={item.path}
        onClick={(e) => {
          if (hasChildren) {
            toggleSubmenu(item.path, e);
          } else {
            handleNavigation(e, item.path);
          }
        }}
        className={`block px-4 py-2 text-sm hover:text-theme-yellow transition-colors ${
          location.pathname === item.path ? "text-theme-yellow" : ""
        }`}
      >
        {item.title}
        {hasChildren && (
          <span className="ml-1 float-right">
            {isOpen
              ? shouldAlignRight
                ? "◀"
                : "▶"
              : shouldAlignRight
              ? "▶"
              : "◀"}
          </span>
        )}
      </a>

      {hasChildren && isOpen && (
        <ul
          className={`absolute ${
            shouldAlignRight ? "right-full" : "left-full"
          } top-0 w-48 bg-theme-dark-blue rounded-md shadow-lg py-1 z-10`}
        >
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

export default NestedMenuItem;
