import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { env } from "@/lib/env";
import { buildMetadata } from "@/lib/seo/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription =
  "Portfolio of Vimal Thapliyal, a frontend technical lead focused on accessible, high-performance enterprise interfaces.";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  ...buildMetadata({
    title: "Vimal Thapliyal — Senior Frontend Developer & Technical Lead",
    description: defaultDescription,
    path: "/",
  }),
  title: {
    default: "Vimal Thapliyal — Senior Frontend Developer & Technical Lead",
    template: "%s — Vimal Thapliyal",
  },
  description: defaultDescription,
  authors: [{ name: "Vimal Thapliyal" }],
  creator: "Vimal Thapliyal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
