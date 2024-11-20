// As a software developer that is writing tests for the Deck component, I want to create the structure of the test file, so that I can start writing the tests.

import { fireEvent, render, screen } from "@testing-library/react";
import Deck from "./Deck";
import { describe, expect, it, vi } from "vitest";

describe("Deck", () => {
  it("should render the component", () => {
    // Given
    const onSelectCard = vi.fn();
    render(<Deck onSelectCard={onSelectCard} />);
    // Then
    screen.getByText("Elige una carta 👇");
  });

  it("should call onSelectCard when a card is clicked", () => {
    // Given
    const onSelectCard = vi.fn();
    render(<Deck onSelectCard={onSelectCard} />);
    // When
    fireEvent.click(screen.getByText("0"));
    // Then
    expect(onSelectCard).toHaveBeenCalledWith(0);
  });
});
