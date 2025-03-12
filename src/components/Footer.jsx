import React from "react";
import useNavigation from "../hooks/useNavigation";

const LEGAL_PAGES = [
  { path: "/privacy", title: "Privacy Policy" },
  { path: "/terms", title: "Terms of Service" },
  { path: "/contact", title: "Contact Us" },
];

const Footer = () => {
  const { handleNavigation } = useNavigation();

  return (
    <footer className="bg-theme-dark-blue text-theme-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-lg font-semibold mb-2 text-theme-yellow">
              Acme Co
            </p>
            <p>
              &copy; {new Date().getFullYear()} Acme Co. All rights reserved.
            </p>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2 text-theme-yellow">
              Legal
            </p>
            <ul className="space-y-2">
              {LEGAL_PAGES.map((page) => (
                <li key={page.path}>
                  <a
                    href={page.path}
                    onClick={(e) => handleNavigation(e, page.path)}
                    className="hover:text-theme-yellow transition-colors"
                  >
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-semibold mb-2 text-theme-yellow">
              Follow Us
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://twitter.com/acme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-yellow transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/acme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-yellow transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/acme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-theme-yellow transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
