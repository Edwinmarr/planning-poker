import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button>", () => {
  it("should render the button", () => {
    render(<Button label="Crear partida" onClick={vi.fn()} />);
    screen.getByText("Crear partida");
  });

  it("should render the button and execute onClick", () => {
    //Given
    const onClick = vi.fn();
    render(<Button label="Crear partida" onClick={onClick} />);
    //When
    fireEvent.click(screen.getByText("Crear partida"));
    //Then
    expect(onClick).toHaveBeenCalled();
  });
});
