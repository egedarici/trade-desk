import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buyer Dashboard | Trade—Desk",
  description: "Global Markets. Trusted Trade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
