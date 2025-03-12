import React, { useState, useEffect } from "react";
import { getApiUrl, API_CONFIG } from "../config/api";

const Header = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch(getApiUrl(API_CONFIG.endpoints.getRoutes))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.routes && Array.isArray(data.routes)) {
          const formattedItems = data.routes.map((route) => ({
            path: route,
            title: route
              .split("/")
              .pop()
              .replace(/-/g, " ")
              .replace(/^\w/, (c) => c.toUpperCase()),
          }));

          if (!formattedItems.some((item) => item.path === "/")) {
            formattedItems.unshift({ path: "/", title: "Home" });
          }
          setNavItems(formattedItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching navigation:", error);
      });
  }, []);

  return (
    <header className="bg-theme-dark-blue text-theme-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-yellow">
          <a href="/">Acme Co</a>
        </h1>
        <nav className="main-nav">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  className="hover:text-theme-yellow transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
