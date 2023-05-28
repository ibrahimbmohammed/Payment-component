import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Input from "@components/CardInuput";

describe("Input", () => {
  it("renders correctly", () => {
    render(
      <Input
        className="border"
        type="text"
        maxLength={10}
        placeholder="Test Input"
        dataTestId="test-input"
      />
    );

    const inputElement = screen.getByTestId("test-input") as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("border");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("maxlength", "10");
    expect(inputElement).toHaveAttribute("placeholder", "Test Input");
  });

  it("handles value change", () => {
    render(
      <Input
        className="border"
        type="text"
        maxLength={10}
        placeholder="Test Input"
        dataTestId="test-input"
      />
    );

    const inputElement = screen.getByTestId("test-input") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

    expect(inputElement.value).toBe("Hello, World!");
  });
});
