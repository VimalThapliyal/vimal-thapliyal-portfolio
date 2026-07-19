import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-2xl flex-col justify-center gap-4 px-6 py-16">
      <p className="font-mono text-[length:var(--text-small)] text-text-muted">404</p>
      <h1 className="text-[length:var(--text-h1)] font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="text-text-muted">
        That route does not exist, or the content is not published yet.
      </p>
      <p>
        <Link href="/" className="text-accent no-underline hover:underline">
          ← Back home
        </Link>
      </p>
    </main>
  );
}
