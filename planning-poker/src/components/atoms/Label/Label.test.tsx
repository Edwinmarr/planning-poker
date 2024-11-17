// As a software developer that is writing tests for the <Label> component, I want to create the structure of the test file, so that I can start writing the tests.

import { render, screen } from "@testing-library/react";
import Label from "./Label";
import { describe, it, expect } from "vitest";

describe("<Label />", () => {
  it("should render the label with the text", () => {
    render(<Label text="Test" className="test" />);
    const label = screen.getByText("Test");
    expect(label).toBeInTheDocument();
  });
});
