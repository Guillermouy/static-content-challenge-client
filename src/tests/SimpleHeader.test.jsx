import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const SimpleHeader = () => (
  <header className="site-header">
    <h1>My company</h1>
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>
);

describe("SimpleHeader Component", () => {
  test("renders header with navigation", () => {
    render(<SimpleHeader />);

    expect(screen.getByText("My company")).toBeInTheDocument();

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });
});
