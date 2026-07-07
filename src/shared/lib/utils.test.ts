import { cn } from "./utils";

describe("shared class utilities", () => {
  it("merges conditional class names and resolves tailwind conflicts", () => {
    const hidden = false;

    expect(cn("px-2", hidden && "hidden", "px-4")).toBe("px-4");
  });
});
