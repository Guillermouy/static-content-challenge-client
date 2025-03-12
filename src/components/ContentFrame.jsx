import React, { useState, useEffect } from "react";
import { API_CONFIG } from "../config/api";

const ContentFrame = () => {
  const [contentUrl, setContentUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = window.location.pathname;
    const contentPath = path === "/" ? "/about-page" : path;
    const url = `${API_CONFIG.baseUrl}${contentPath}`;
    setContentUrl(url);
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      setLoading(true);
      const path = window.location.pathname;
      const contentPath = path === "/" ? "/about-page" : path;
      const url = `${API_CONFIG.baseUrl}${contentPath}`;
      setContentUrl(url);
      setLoading(false);
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div className="content-frame-container">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading content...</p>
        </div>
      ) : contentUrl ? (
        <iframe
          src={contentUrl}
          title="Content"
          className="w-full"
          style={{
            height: "calc(100vh - 200px)",
            border: "none",
            overflow: "auto",
          }}
        />
      ) : null}
    </div>
  );
};

export default ContentFrame;
