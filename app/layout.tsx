import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maurizio Di Russo | Mobility, Data & Insurance",
  description: "Executive perspective at the intersection of mobility, data and insurance.",
  openGraph: {
    title: "Maurizio Di Russo | Mobility, Data & Insurance",
    description: "Executive perspective at the intersection of mobility, data and insurance.",
    type: "website",
    images: [{ url: "/og.png", width: 1730, height: 910, alt: "Maurizio Di Russo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maurizio Di Russo | Mobility, Data & Insurance",
    description: "Executive perspective at the intersection of mobility, data and insurance.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
