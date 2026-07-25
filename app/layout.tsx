import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stamplift — Tap-to-Stamp Loyalty for Apple & Google Wallet",
  description:
    "Stamplift turns an NFC tap into a full loyalty program on Apple Wallet and Google Wallet. No app, no plastic card.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
