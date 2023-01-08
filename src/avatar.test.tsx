import {describe, expect, it, beforeEach} from "vitest";
import {render, screen, cleanup, fireEvent} from "@testing-library/react";
import Avatar, {Constants} from "./avatar";

describe("Avatar", () => {
  beforeEach(() => {
    cleanup();
  });

  it("should render an img with alt text", () => {
    const url = "https://cataas.com/cat/says/hello%20world!";
    const alt = "@github-handle";
    render(<Avatar url={url} alt={alt}/>);
    const img = screen.getByAltText(alt);
    expect(img).toBeInTheDocument();
    expect(img.tagName).toBe("IMG");
  });

  it("should render the url and alt passed in", () => {
    const url = "https://cataas.com/cat/says/hello%20world!";
    const alt = "a beautiful cat";
    render(<Avatar url={url} alt={alt} />);

    const img = screen.getByAltText(alt);
    expect(img).toHaveAttribute("src", url);
  });

  it("should use a fallback image if no URL passed it", () => {
    render(<Avatar />);

    const img = screen.getByAltText(Constants.FALLBACK_AVATAR_ALT);
    expect(img).toHaveAttribute("src", Constants.FALLBACK_AVATAR_URL);
  });

  it("should use a fallback image if image fails to load", async () => {
    render(<Avatar url="https://cataas.com/cat/says/404" />);

    const img = screen.getByAltText(Constants.FALLBACK_AVATAR_ALT);
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", Constants.FALLBACK_AVATAR_URL);
  });

  it("should use a fallback image if url is empty string", async () => {
    render(<Avatar url="" />);

    const img = screen.getByAltText(Constants.FALLBACK_AVATAR_ALT);
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", Constants.FALLBACK_AVATAR_URL);
  });
});
