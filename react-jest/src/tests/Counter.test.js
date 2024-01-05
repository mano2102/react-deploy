import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test("Checking the counter component count value", () => {
  render(<Counter />);
  const counterText = screen.getByText("Increment");
  fireEvent.click(counterText);

  const count = screen.getByTestId("counter");
  expect(count).toHaveTextContent("1");
});
