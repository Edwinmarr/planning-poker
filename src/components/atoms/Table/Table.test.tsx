// As a software developer that is writing tests for the Table component, I want to create the structure of the test file, so that I can start writing the tests.

import { render, screen } from "@testing-library/react";
import Table from "./Table";
import { describe, it, expect, vi } from "vitest";

describe("Table", () => {
  it("should render the Table component", () => {
    const onCalculateAverage = vi.fn();
    const onResetVotes = vi.fn();
    render(
      <Table
        onCalculateAverage={onCalculateAverage}
        onResetVotes={onResetVotes}
        showAverageButton={true}
        showResetButton={true}
      />
    );
    const table = screen.getByAltText("Big Table");
    expect(table).toBeInTheDocument();
  });
  // As a software developer that is writing tests for the Table component, I want to create a test that checks if the calculate button is rendered when the right conditions are met, so that I can verify that the button is being rendered correctly.
  it("should render the calculate button when showAverageButton is true", () => {
    const onCalculateAverage = vi.fn();
    const onResetVotes = vi.fn();
    render(
      <Table
        onCalculateAverage={onCalculateAverage}
        onResetVotes={onResetVotes}
        showAverageButton={true}
        showResetButton={true}
      />
    );
    const calculateButton = screen.getByTestId("calculateButton");
    expect(calculateButton).toBeInTheDocument();
  });
  // As a software developer that is writing tests for the Table component, I want to create a test that checks if the reset button is rendered when the right conditions are met, so that I can verify that the button is being rendered correctly.
  it("should render the reset button when showResetButton is true", () => {
    const onCalculateAverage = vi.fn();
    const onResetVotes = vi.fn();
    render(
      <Table
        onCalculateAverage={onCalculateAverage}
        onResetVotes={onResetVotes}
        showAverageButton={true}
        showResetButton={true}
      />
    );
    const resetButton = screen.getByTestId("resetButton");
    expect(resetButton).toBeInTheDocument();
  });
});
