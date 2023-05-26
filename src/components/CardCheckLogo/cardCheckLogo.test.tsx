import { describe, it, expect } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import CardCheckLogo from "@components/CardCheckLogo";

describe("CardCheckLogo", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render null when number length is 0", () => {
    render(<CardCheckLogo number="" renderCardLogo={() => null} />);
    const logoElement = screen.queryByTestId("card-check-logo");
    expect(logoElement).toBeNull();
  });

  it("should render FcCancel icon when renderCardLogo returns falsy and number length is greater than or equal to 2", () => {
    render(<CardCheckLogo number="12345" renderCardLogo={() => null} />);
    const cancelIconElement = screen.getByTestId("card-check-logo-cancel");
    expect(cancelIconElement).toBeInTheDocument();
  });

  it("should render HiCheckBadge icon when renderCardLogo returns truthy", () => {
    render(
      <CardCheckLogo
        number="12345"
        renderCardLogo={() => <div>Custom Logo</div>}
      />
    );
    const checkIconElement = screen.getByTestId("card-check-logo");
    expect(checkIconElement).toBeInTheDocument();
  });
});
