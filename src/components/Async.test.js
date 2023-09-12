import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("async component", () => {
  test("render posts if request succeeds", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First post" }],
    });
    // Arrange``
    render(<Async />);

    // Act
    // do nothing ...

    // Assert
    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);
  });
});
