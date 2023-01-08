import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("it should with the title visible", () => {
    render(<App />);
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});

