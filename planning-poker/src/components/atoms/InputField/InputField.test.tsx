import { describe, it, vi } from "vitest";
import InputField from "./InputField";
import { render, screen } from "@testing-library/react";

describe("<InputField>", () => {
  it("should render the input field", () => {
    //Given
    const valueText = "some text";
    //When
    render(
      <InputField value={valueText} onChange={vi.fn()} testId="inputTestId" />
    );
    //Then
    screen.getByTestId("inputTestId");
  });
  it("should render the input field with a label", () => {
    //Given
    const valueText = "some text";
    const labelText = "some label";
    //When
    render(
      <InputField
        value={valueText}
        onChange={vi.fn()}
        label={labelText}
        testId="inputTestId"
      />
    );
    //Then
    screen.getByText(labelText);
  });
});
