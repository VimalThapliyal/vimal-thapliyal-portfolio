/** @vitest-environment jsdom */

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ThemeControl } from "@/components/theme/theme-control";

const setTheme = vi.fn();

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme,
  }),
}));

describe("ThemeControl", () => {
  afterEach(() => {
    cleanup();
    setTheme.mockClear();
  });

  it("exposes a radiogroup and announces the selected theme", async () => {
    const user = userEvent.setup();
    render(<ThemeControl />);

    expect(screen.getByRole("radiogroup", { name: "Theme" })).toBeTruthy();

    const light = screen.getByRole("radio", { name: "Light" });
    const dark = screen.getByRole("radio", { name: "Dark" });

    await waitFor(() => {
      expect(light.getAttribute("aria-checked")).toBe("true");
    });
    expect(dark.getAttribute("aria-checked")).toBe("false");

    await user.click(dark);
    expect(setTheme).toHaveBeenCalledWith("dark");
  });
});
