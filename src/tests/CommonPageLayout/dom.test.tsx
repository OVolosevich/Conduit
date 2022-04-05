import { render, screen } from "@testing-library/react"; 
import CommonPageLayout from "../../pages/CommonPageLayout";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";

describe("Header", () => {
  beforeEach(()=> {
    render(
      <BrowserRouter>
        <CommonPageLayout />
      </BrowserRouter>
    );
  });
  test("shows logo", () => {
    expect(screen.getByText("conduit")).toBeInTheDocument();
  });
  test("shows navigation", () => {
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});

describe("Footer", () => {

  beforeEach(()=> {
    render(
      <BrowserRouter>
        <CommonPageLayout />
      </BrowserRouter>
    );
  });
    test("shows footer link", () => {
    expect(screen.getByText("GitHub")).toBeInTheDocument();
  });
});

