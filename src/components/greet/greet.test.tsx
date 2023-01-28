import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe.skip("test skipping feature", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Amit" />);
    const textElement = screen.getByText("Hello Amit");
    expect(textElement).toBeInTheDocument();
  });
});

describe("greet", () => {
  // test.only('renders correctly', () => {
  //     render(<Greet />);
  //     const textElement = screen.getByText('Hello');
  //     expect(textElement).toBeInTheDocument();
  // });

  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });

  test("renders with a name", () => {
    render(<Greet name="Amit" />);
    const textElement = screen.getByText("Hello Amit");
    expect(textElement).toBeInTheDocument();
  });
});
