export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="absolute left-4 top-4 z-[100] -translate-y-[220%] rounded-[var(--radius-sm)] bg-surface px-4 py-3 text-text shadow-[var(--shadow-overlay)] transition-transform focus:translate-y-0"
    >
      Skip to main content
    </a>
  );
}
