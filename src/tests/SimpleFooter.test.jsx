import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const SimpleFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <p>&copy; {currentYear} My company. All rights reserved.</p>
        <div className="footer-links">
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

describe("SimpleFooter Component", () => {
  test("renders footer with copyright information", () => {
    render(<SimpleFooter />);

    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(currentYear.toString()))
    ).toBeInTheDocument();

    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
  });
});
