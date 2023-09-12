import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello world", () => {
    // arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const HelloWorldElement = screen.getByText("Hello World!");
    expect(HelloWorldElement).toBeInTheDocument;
  });

  test("render it isgood to see you", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...do something

    // Assert
    const GoodElement = screen.getByText("good to see you", { exact: false });
    expect(GoodElement).toBeInTheDocument;
  });

  test("render changed if button is clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("changed!");
    expect(outputElement).toBeInTheDocument;
  });

  test("does not it is Good to see you", () => {
    // Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    // const RemoveElement = screen.findByText("good to see you", {
    //   exact: false,
    // });
    const RemoveElement = screen.queryByText("good to see you", {
      exact: false,
    });
    // expect(RemoveElement).not.toBeInTheDocument;
    expect(RemoveElement).toBeNull();
  });
});
