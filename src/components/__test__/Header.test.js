import { render, screen, fireEvent } from "@testing-library/react";
import { Header } from "../Header";
import { Provider } from "react-redux";
import { appStore } from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

const HeaderTest = () => {
  return (
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
};

it("Should render with Grocery component", () => {
  render(<HeaderTest />);

  const groceryLink = screen.getByText("Grocery");

  expect(groceryLink).toBeInTheDocument();
});

it("Should render with login button", () => {
  render(<HeaderTest />);

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("Should render with Cart link", () => {
  render(<HeaderTest />);
  // we can use regex in the Text also
  const cartLink = screen.getByText(/Cart/);

  expect(cartLink).toBeInTheDocument();
});

it("Should trigger login/logout button functionality", () => {
  render(<HeaderTest />);

  const loginButton = screen.getByRole("button", { name: "Login" });
  // We can fire event on and test the case
  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});


