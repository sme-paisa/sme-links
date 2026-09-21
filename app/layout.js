import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "SME PAISA — Quick Links",
  description: "Connect with SME PAISA across all platforms. Find our website, social media, and contact links.",
  keywords: "SME PAISA, SME, business finance, links",
  openGraph: {
    title: "SME PAISA — Quick Links",
    description: "Connect with SME PAISA across all platforms.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
