import { describe, render, screen } from "@testing-library/react";
import Login from "../components/Login";

test("testing the login form text", () => {
  render(<Login />);
  const titleText = screen.getByText("Login form");
  expect(titleText).toBeInTheDocument();
});
test("checking button with text login", () => {
  render(<Login />);
  const buttonText = screen.getByText("Login");
  expect(buttonText).toBeVisible();
});
test("checking the placeholder value of username input with the attributes email", () => {
  render(<Login />);
  const usernameInput = screen.getByPlaceholderText("Username");
  expect(usernameInput).toBeInTheDocument();
  expect(usernameInput).toHaveAttribute("type", "email");
});
test("Checking the password input box  using placeholder with attribute type='password'", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute("type", "password");
});
test("Checking the input username box having initial empyt values", () => {
  render(<Login />);
  const usernameInput = screen.getByPlaceholderText("Username");
  expect(usernameInput).toHaveValue("");
});
test("Checking the input password box having initial empty values ", () => {
  render(<Login />);
  const passwordInput = screen.getByPlaceholderText("Password");
  expect(passwordInput).toHaveValue("");
});
// test("Checking the color of the button using classname", () => {
//   render(<Login />);
//   const buttonStyle = screen.getByText("Login");
//   const computedStyles = window.getComputedStyle(buttonStyle);
//   //   expect(computedStyles.backgroundColor).toBe("white");
//   expect(computedStyles.color).toBe("rgb(255,255,255)");
// });

