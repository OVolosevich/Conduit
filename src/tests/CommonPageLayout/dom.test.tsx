import { render, screen } from "@testing-library/react"; 
import CommonPageLayout from "../../pages/CommonPageLayout";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";

describe("Header", () => {
  test("shows logo", () => {
    render(
      <BrowserRouter>
        <CommonPageLayout />
      </BrowserRouter>
    );
    expect(screen.getByText("conduit")).toBeInTheDocument();
  });
  test("shows navigation", () => {
    render(
      <BrowserRouter>
        <CommonPageLayout />
      </BrowserRouter>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});

describe("Footer", () => {
  test("shows footer link", () => {
    render(
      <BrowserRouter>
        <CommonPageLayout />
      </BrowserRouter>
    );
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});

