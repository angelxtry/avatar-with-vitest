import {describe, expect, it} from "vitest";
import {render, screen} from "@testing-library/react";
import Avatar from "./avatar";
import Wrapper from "./wrapper";

describe("Wrapper", () => {
  it("should render a caption an image", () => {
    const url = "https://cataas.com/cat/says/hello%20world!";
    const alt = "@github-handle";
    const cap = "a beautiful cat";
    render(
      <Wrapper caption={cap}>
        <Avatar url={url} alt={alt} />
      </Wrapper>
    );

    const img = screen.getByAltText(alt);
    const caption = screen.getByText(cap);
    expect(img).toBeInTheDocument()
    expect(caption).toBeInTheDocument();
  });
});
