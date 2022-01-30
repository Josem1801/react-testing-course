import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it("renders Hello world", () => {
  render(<Hello />);
  const ele = screen.getByText(/Hello world/);
  expect(ele).toBeInTheDocument();
});
