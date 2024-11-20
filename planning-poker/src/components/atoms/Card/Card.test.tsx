// As a software developer that is writing tests for the Card component, I want to create the structure of the test file with the needed imports, so that I can start writing the tests.

import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { describe, it, vi } from "vitest";

describe("Card", () => {
  it("should render the component", () => {
    // Given
    const label = "3";
    const value = 3;
    const onClick = vi.fn();
    // When
    render(<Card label={label} value={value} onClick={onClick} />);
    // Then
    screen.getByText(label);
  });
});
