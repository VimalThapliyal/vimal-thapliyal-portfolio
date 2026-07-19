/** @vitest-environment jsdom */

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MobileNavSheet } from "@/components/navigation/mobile-nav-sheet";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    onClick,
    ...rest
  }: {
    children: React.ReactNode;
    href: string;
    onClick?: () => void;
  }) => (
    <a href={href} onClick={onClick} {...rest}>
      {children}
    </a>
  ),
}));

vi.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "system",
    setTheme: vi.fn(),
  }),
}));

describe("MobileNavSheet", () => {
  afterEach(() => {
    cleanup();
    document.body.style.overflow = "";
  });

  it("closes on Escape and restores focus to the previous element", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    const trigger = document.createElement("button");
    trigger.textContent = "Open menu";
    document.body.appendChild(trigger);
    trigger.focus();

    const { rerender } = render(
      <MobileNavSheet open onClose={onClose} pathname="/" />,
    );

    expect(screen.getByRole("dialog", { name: "VT" })).toBeTruthy();
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledTimes(1);

    rerender(<MobileNavSheet open={false} onClose={onClose} pathname="/" />);
    expect(document.activeElement).toBe(trigger);
  });

  it("keeps focus within the dialog when tabbing", async () => {
    const user = userEvent.setup();
    render(<MobileNavSheet open onClose={vi.fn()} pathname="/about" />);

    const dialog = screen.getByRole("dialog", { name: "VT" });
    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    expect(focusable.length).toBeGreaterThan(2);

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first.focus();
    await user.tab({ shift: true });
    expect(document.activeElement).toBe(last);

    last.focus();
    await user.keyboard("{Tab}");
    expect(document.activeElement).toBe(first);
  });
});
