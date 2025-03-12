import { useState, useEffect } from "react";
import { getApiUrl, API_CONFIG } from "../config/api";

export function useNavigationData() {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetchNavigationRoutes();
  }, []);

  const fetchNavigationRoutes = () => {
    fetch(getApiUrl(API_CONFIG.endpoints.getRoutes))
      .then((response) => response.json())
      .then((data) => {
        if (data.routes && Array.isArray(data.routes)) {
          setNavItems(buildNavigationTree(data.routes));
        }
      })
      .catch((error) => {
        console.error("Error fetching navigation:", error);
      });
  };

  const buildNavigationTree = (routes) => {
    const routeTree = {};

    routes.forEach((route) => {
      const segments = route.split("/").filter((segment) => segment);
      let currentLevel = routeTree;

      segments.forEach((segment, index) => {
        if (!currentLevel[segment]) {
          currentLevel[segment] = {
            path: "/" + segments.slice(0, index + 1).join("/"),
            title: segment
              .replace(/-/g, " ")
              .replace(/^\w/, (c) => c.toUpperCase()),
            children: {},
          };
        }
        currentLevel = currentLevel[segment].children;
      });
    });

    return Object.values(routeTree);
  };

  return { navItems };
}
