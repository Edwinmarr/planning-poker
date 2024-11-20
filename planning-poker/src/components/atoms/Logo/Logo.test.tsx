// As a software developer that is writing tests for the Logo component, I want to create the structure of the test file, so that I can start writing the tests.

import { render } from "@testing-library/react";
import Logo from "./Logo";
import { describe, it } from "vitest";

describe("Logo", () => {
  it("should render the logo", () => {
    render(<Logo />);
  });
});
