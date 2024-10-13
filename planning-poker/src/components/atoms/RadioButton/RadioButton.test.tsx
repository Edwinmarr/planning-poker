import { describe, it } from "vitest";
import RadioButton from "./RadioButton";
import { render, screen } from "@testing-library/react";

describe("<RadioButton>", () => {
  it("should render the RadioButton", () => {
    //Given
    const valueText = "some text";
    //When
    render(
      <RadioButton name={valueText} value={valueText} testId="RadioButtonId" />
    );
    //Then
    screen.getByTestId("RadioButtonId");
  });
});
