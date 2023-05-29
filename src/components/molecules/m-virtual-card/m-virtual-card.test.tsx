import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import VitualCard from "@components/molecules/m-virtual-card";

describe("VitualCard", () => {
  it("renders correctly with a card logo", async () => {
    // Mock function for renderCardLogo
    const renderCardLogo = vi.fn(() => <div>Card Logo</div>);

    // Render the component
    render(<VitualCard renderCardLogo={renderCardLogo} />);

    // Assert that the card logo is rendered
    const cardLogo = screen.getByText("Card Logo");
    expect(cardLogo).toBeInTheDocument();
  });

  it("renders correctly without a card logo", async () => {
    // Mock function for renderCardLogo
    const renderCardLogo = vi.fn();

    // Render the component
    render(<VitualCard renderCardLogo={renderCardLogo} />);

    // Assert that the card logo is not rendered
    const cardLogo = screen.queryByText("Card Logo");
    expect(cardLogo).toBeNull();
  });
});
