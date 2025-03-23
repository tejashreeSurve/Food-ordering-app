import { Contact } from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact", () => {
  it("Should render the Contact component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should render the button", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  it("Should render 2 inputs boxes", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox"); // return array of react element
    expect(inputs.length).toBe(2);
  });
});
