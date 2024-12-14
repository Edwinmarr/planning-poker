// As a software developer that is writing tests for the Deck component, I want to create the structure of the test file, so that I can start writing the tests.

import { fireEvent, render, screen } from "@testing-library/react";
import Deck from "./Deck";
import { describe, expect, it, vi } from "vitest";

describe("Deck", () => {
  it("should render the component", () => {
    // Given
    const onSelectCard = vi.fn();
    const cards = [
      { id: 1, label: "Card 1", value: 0 },
      { id: 2, label: "Card 2", value: 1 },
    ]; // Example cards
    render(<Deck onSelectCard={onSelectCard} cards={cards} />);
    // Then
    screen.getByText("Elige una carta 👇");
  });

  it("should call onSelectCard when a card is clicked", () => {
    // Given
    const onSelectCard = vi.fn();
    const cards = [
      { id: 1, label: "Card 1", value: 0 },
      { id: 2, label: "Card 2", value: 1 },
    ]; // Example cards
    render(
      <Deck testId="deckTest" onSelectCard={onSelectCard} cards={cards} />
    );
    // When
    fireEvent.click(screen.getByText("Card 1"));
    // Then
    expect(onSelectCard).toHaveBeenCalled();
  });
});
