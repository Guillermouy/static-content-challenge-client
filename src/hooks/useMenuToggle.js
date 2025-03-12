import { useState, useEffect } from "react";

export function useMenuToggle(dependencies = []) {
  const [openMenus, setOpenMenus] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".main-nav")) {
        setOpenMenus({});
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpenMenus({});
  }, dependencies);

  const toggleSubmenu = (path, e) => {
    e.preventDefault();
    e.stopPropagation();

    setOpenMenus((prev) => {
      const newState = { ...prev };
      if (newState[path]) {
        delete newState[path];
      } else {
        newState[path] = true;
      }
      return newState;
    });
  };

  return { openMenus, toggleSubmenu };
}
