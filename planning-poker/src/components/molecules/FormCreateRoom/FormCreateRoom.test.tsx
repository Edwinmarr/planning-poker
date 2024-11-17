import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { FormCreateRoom } from "./FormCreateRoom";

describe("<FormCreateRoom>", () => {
  it("should render the form", () => {
    // Given
    // When
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // Then
    screen.getByText("Nombra la partida");
    screen.getByText("Crear partida");
  });

  it("should change input value when given some text", () => {
    // Given
    const writtenText = "Prote room";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: writtenText },
    });
    // Then
    expect(screen.getByTestId("ButtonTestId")).toBeEnabled();
  });

  it("should show an error message when the input is less than 5 characters", () => {
    // Given
    const shortText = "1234";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: shortText },
    });
    // Then
    screen.getByText("Debe tener entre 5 y 20 caracteres.");
  });

  it("should show an error message when the input is bigger than 20 characters", () => {
    // Given
    const longText = "123456789012345678901";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: longText },
    });
    // Then
    screen.getByText("Debe tener entre 5 y 20 caracteres.");
  });

  it("should show an error message when the input has special characters", () => {
    // Given
    const specialCharText = "Prote@room";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: specialCharText },
    });
    // Then
    screen.getByText("No se permiten caracteres especiales como _,.*#/-");
  });

  it("should show an error message when the input contains only numbers", () => {
    // Given
    const numbersOnlyText = "12345";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: numbersOnlyText },
    });
    // Then
    screen.getByText("No puede contener solo números.");
  });

  it("should show an error message when the input contains more than 3 numbers", () => {
    // Given
    const moreThanThreeNumbersText = "Prote1234";
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: moreThanThreeNumbersText },
    });
    // Then
    screen.getByText("No puede tener más de 3 números.");
  });

  it("should show an alert with the room name when the form is submitted", () => {
    // Given
    const validText = "ProteRoom";
    window.alert = vi.fn();
    render(
      <BrowserRouter>
        <FormCreateRoom />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: validText },
    });
    fireEvent.click(screen.getByTestId("ButtonTestId"));
    // Then
    expect(window.alert).toHaveBeenCalledWith(`Room created: ${validText}`);
  });
});
