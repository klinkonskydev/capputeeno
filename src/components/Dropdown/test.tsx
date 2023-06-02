import { fireEvent, render, screen } from "@testing-library/react";

import Dropdown from ".";

describe("<Dropdown />", () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Click here</h1>;

    render(
      <Dropdown title={title}>
        <span>content</span>
      </Dropdown>
    );
  });

  it("should render title", () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument();
  });

  it("should handle open/close dropdown", () => {
    const content = screen.getByText(/content/).parentElement!;

    expect(content).toHaveStyle({ opacity: 0 });
    expect(content.getAttribute("aria-hidden")).toBe("true");

    fireEvent(
      screen.getByLabelText(/toogle dropdown/),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(content).toHaveStyle({ opacity: 1 });
    expect(content.getAttribute("aria-hidden")).toBe("false");
  });

  it("should handle open/close dropdown when clicking on overlay", () => {
    const content = screen.getByText(/content/).parentElement!;
    const overlay = content.nextElementSibling;

    fireEvent(
      screen.getByLabelText(/toogle dropdown/),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(overlay).toHaveStyle({ opacity: 1 });
    expect(overlay!.getAttribute("aria-hidden")).toBe("false");

    fireEvent(
      overlay!,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(overlay).toHaveStyle({ opacity: 0 });
    expect(overlay!.getAttribute("aria-hidden")).toBe("true");
  });
});
