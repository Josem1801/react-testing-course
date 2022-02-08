import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";
describe("Initialized with defaultCount = 0 and description = 'My Counter'", () => {
  beforeEach(() => {
    render(<Counter defaultCount={0} description="My counter" />);
  });
  it("defaultCounter = 0, then counter = 1", () => {
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });
  it("Renders title as 'My counter'", () => {
    expect(screen.getByText(/My counter/)).toBeInTheDocument();
  });
  it("default = 0, and - clicked then counter = -1", () => {
    fireEvent.click(screen.getByRole("button", { name: "Substract" }));
    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });
  describe("When the incrementor changes to 5 and '+' button is clicked", () => {
    beforeEach(async () => {
      user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
      user.click(screen.getByRole("button", { name: "Add" }));
      /* eslint-disable */
      await waitFor(() => screen.getByText("Counter: 5"));
    });
    it("Renders 'Current count: 5'", () => {
      expect(screen.getByText("Counter: 5")).toBeInTheDocument();
    });

    describe("When the incrementor changes to empty string and '+' button is clicked", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}{delete}");
        user.click(screen.getByRole("button", { name: "Add" }));
      });
      /* eslint-disable */
      it("renders 'Counter: 5'", async () => {
        expect(screen.getByText("Counter: 5")).toBeInTheDocument();
      });
    });
  });
});
