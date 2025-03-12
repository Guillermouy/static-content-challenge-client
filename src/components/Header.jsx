import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getApiUrl, API_CONFIG } from "../config/api";

const Header = () => {
  const [navItems, setNavItems] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(getApiUrl(API_CONFIG.endpoints.getRoutes))
      .then((response) => response.json())
      .then((data) => {
        if (data.routes && Array.isArray(data.routes)) {
          const formattedItems = data.routes.map((route) => ({
            path: route,
            title: route
              .split("/")
              .pop()
              .replace(/-/g, " ")
              .replace(/^\w/, (c) => c.toUpperCase()),
          }));

          setNavItems(formattedItems);
        }
      })
      .catch((error) => {
        console.error("Error fetching navigation:", error);
      });
  }, []);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    navigate(path);

    const contentPath = path;
    const iframeSrc = `${API_CONFIG.baseUrl}${contentPath}`;

    const iframe = document.querySelector(".content-frame-container iframe");
    if (iframe) {
      iframe.src = iframeSrc;
    }
  };

  return (
    <header className="bg-theme-dark-blue text-theme-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-theme-yellow">
          <a href="/" onClick={(e) => handleNavigation(e, "/")}>
            Acme Co
          </a>
        </h1>
        <nav className="main-nav">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`hover:text-theme-yellow transition-colors ${
                    location.pathname === item.path ? "text-theme-yellow" : ""
                  }`}
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
