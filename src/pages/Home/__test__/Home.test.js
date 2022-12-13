import { render, screen, cleanup } from "@testing-library/react";
import Home from "../Home";

it("Should render Home Component", () => {
  render(<Home />);
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
