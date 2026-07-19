/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "@/components/contact/contact-form";

describe("ContactForm", () => {
  afterEach(() => {
    cleanup();
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("shows setup guidance when Formspree is not configured", () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_FORM_ID", "");
    render(<ContactForm />);

    expect(
      screen.getByRole("heading", { name: /Form endpoint not configured/i }),
    ).toBeTruthy();
    expect(screen.getByRole("link", { name: /vimalmern126@gmail.com/i })).toBeTruthy();
  });

  it("validates required fields before submitting", async () => {
    vi.stubEnv("NEXT_PUBLIC_FORMSPREE_FORM_ID", "test-form-id");
    const user = userEvent.setup();
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: "Send message" }));

    expect(screen.getByRole("alert").textContent).toMatch(/highlighted fields/);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
