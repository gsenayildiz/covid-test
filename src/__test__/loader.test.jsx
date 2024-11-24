import { render, screen } from "@testing-library/react";
import Loader from "../components/loader/index";

it("Heading için  doğru loader renderlanır", () => {
  render(<Loader type="heading" />);

  screen.getByTestId("heading-loader");
});

it("Diğer alanlar için doğru loader renderlanır", () => {
  render(<Loader />);

 const loaders = screen.getAllByTestId("content-loader");

  expect(loaders.length).toBe(16);
});
