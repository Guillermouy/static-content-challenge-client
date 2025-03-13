import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentFrame from "../components/ContentFrame";

jest.mock("../config/api", () => ({
  API_CONFIG: {
    baseUrl: "https://test-api.example.com",
  },
}));

describe("ContentFrame Component", () => {
  test("renders iframe with correct src", () => {
    render(<ContentFrame />);

    const iframe = screen.getByTitle("Content");
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute("src", "https://test-api.example.com/");
  });
});
