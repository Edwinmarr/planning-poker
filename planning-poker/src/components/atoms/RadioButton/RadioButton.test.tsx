import { describe, it, vi } from "vitest";
import RadioButton from "./RadioButton";
import { render, screen } from "@testing-library/react";

describe("<RadioButton>", () => {
  it("should render the RadioButton", () => {
    //Given
    const valueText = "some text";
    const onChangeMock = vi.fn();
    //When
    render(
      <RadioButton
        name={valueText}
        value={valueText}
        testId="RadioButtonId"
        label={""}
        onChange={onChangeMock}
      />
    );
    //Then
    screen.getByTestId("RadioButtonId");
  });
});
