// As a software developer that is writing tests for the FormCreateUser component, I want to create the structure of the test file, so that I can start writing the tests.

import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FormCreateUser from "./FormCreateUser";
import { describe, it, vi } from "vitest";

describe("FormCreateUser", () => {
  it("should render the component", () => {
    // Given
    const onCreateUser = vi.fn();
    render(
      <BrowserRouter>
        <FormCreateUser onCreateUser={onCreateUser} />
      </BrowserRouter>
    );
    // Then
    screen.getByText("Tu nombre");
  });

  it("should show an error message when the input contains special characters", () => {
    // Given
    const onCreateUser = vi.fn();
    const specialCharText = "Prote#room";
    render(
      <BrowserRouter>
        <FormCreateUser onCreateUser={onCreateUser} />
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
    const onCreateUser = vi.fn();
    const numbersOnlyText = "12345";
    render(
      <BrowserRouter>
        <FormCreateUser onCreateUser={onCreateUser} />
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
    const onCreateUser = vi.fn();
    render(
      <BrowserRouter>
        <FormCreateUser onCreateUser={onCreateUser} />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: moreThanThreeNumbersText },
    });
    // Then
    screen.getByText("No puede tener más de 3 números.");
  });

  it("should navigate to the room when the button is clicked", () => {
    // Given
    const roomName = "Sprint32";
    const onCreateUser = vi.fn();
    render(
      <BrowserRouter>
        <FormCreateUser onCreateUser={onCreateUser} />
      </BrowserRouter>
    );
    // When
    fireEvent.change(screen.getByTestId("inputFieldTestId"), {
      target: { value: roomName },
    });
  });
});
