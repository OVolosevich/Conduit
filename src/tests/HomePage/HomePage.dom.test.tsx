import { render, screen } from "@testing-library/react";
import App from "../../App";
import React from "react";
import "@testing-library/jest-dom";

describe("App", () => {
  test("shows logo", () => {
    render(<App />);
    expect(screen.getByTitle("logo")).toBeInTheDocument();
  });
});
