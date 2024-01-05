import { render, screen } from "@testing-library/react";
import Paragraph from "../components/Paragraph";

test("Paragraph component rendered here", () => {
  render(<Paragraph />);
  const element = screen.getByText("Paragraph");
  expect(element).toBeInTheDocument();
});
