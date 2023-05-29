/* eslint-disable @typescript-eslint/no-empty-function */
import { describe, it, expect, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import CardFormSection from "@components/molecules/m-card-form-section";

describe("CardFormSection", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly", () => {
    // Render the component
    render(
      <CardFormSection
        number=""
        cardType={null}
        renderCardLogo={() => null}
        handleNumberChange={() => {}}
      />
    );
    // Assert that the component renders as expected
    expect(screen.getByTestId("card-number-input")).toBeInTheDocument();
    expect(screen.getByTestId("card-number-cvv")).toBeInTheDocument();
    expect(screen.getByTestId("card-number-exp1")).toBeInTheDocument();
    expect(screen.getByTestId("card-number-exp2")).toBeInTheDocument();
    expect(screen.getByTestId("card-number-password")).toBeInTheDocument();
  });

  it("handleNumberChange gets called with potentialy correct values", async () => {
    // Define a mock event and handler function
    const mockEvent = { target: { value: "1234567890123456" } };
    let handleNumberChangeCalled = false;

    // Define a mock handleNumberChange function
    const handleNumberChange = (event: { target: { value: string } }) => {
      // Check if the function was called with the correct argument
      if (event.target.value === mockEvent.target.value) {
        handleNumberChangeCalled = true;
      }
    };

    // Render the component with the mock handler
    render(
      <CardFormSection
        number=""
        cardType={null}
        renderCardLogo={() => null}
        handleNumberChange={handleNumberChange}
      />
    );

    // Get the input element and simulate a change event
    const inputElement = screen.getByTestId("card-number-input");
    fireEvent.change(inputElement, mockEvent);

    // Assert that the handleNumberChange function was called with the correct value
    expect(handleNumberChangeCalled).toBe(true);
  });
});
