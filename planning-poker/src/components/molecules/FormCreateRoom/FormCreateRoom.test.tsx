import { describe, expect, it, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormCreateRoom } from "./FormCreateRoom";

describe("<FormCreateRoom>", () => {
  it("should render the form", () => {
    //Given
    //When
    render(<FormCreateRoom />);
    //Then
    screen.getByText("Nombra la partida");
    screen.getByText("Crear partida");
  });
  it("should change input value when given some text", () => {
    //Given
    const writtenText = "Prote room";
    render(<FormCreateRoom />);
    //When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: writtenText },
    });
    //Then
    expect(screen.getByTestId("ButtonTestId")).toBeEnabled();
  });

  test.each([
    [
      "is less than 5 characters",
      "room",
      "Debe tener entre 5 y 20 caracteres.",
    ],
    [
      "is bigger than 20 characters",
      "roomWithTooManyCharacters",
      "Debe tener entre 5 y 20 caracteres.",
    ],
    [
      "has special characters",
      "room#_,.*/-",
      "No se permiten caracteres especiales como _,.*#/-",
    ],
    ["contains only numbers", "12345678", "No puede contener solo números."],
    [
      "contains more than 3 numbers",
      "room1234",
      "No puede tener más de 3 números.",
    ],
  ])(
    "should show an error message when the input %s",
    (_testDescription, targetValue, expectedErrorMessage) => {
      //Given
      render(<FormCreateRoom />);
      //When
      fireEvent.change(screen.getByTestId("inputFieldTestId"), {
        target: { value: targetValue },
      });
      //Then
      expect(screen.getByText(expectedErrorMessage)).toBeInTheDocument();
      expect(screen.getByTestId("ButtonTestId")).toBeDisabled();
    }
  );
  it("should show an alert with the room name when the form is submitted", () => {
    //Given
    const roomName = "Prote room";
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    render(<FormCreateRoom />);
    //When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: roomName },
    });
    fireEvent.click(screen.getByTestId("ButtonTestId"));
    //Then

    expect(alertMock).toHaveBeenCalledWith(
      `Sala creada con nombre ${roomName}`
    );
    alertMock.mockRestore();
  });
});
