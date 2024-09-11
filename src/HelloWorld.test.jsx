import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test('renders "Hello World" text using getByTestId', () => {
  const { getByTestId } = render(<HelloWorld />);
  const helloWorldElement = getByTestId("hello-world");
  expect(helloWorldElement).toBeInTheDocument();
  expect(helloWorldElement.textContent).toBe("Hello World");
});