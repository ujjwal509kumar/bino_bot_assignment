import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Dynamic Page Generator",
    template: "%s | Dynamic Page Generator"
  },
  description: "Create beautiful pages instantly through our REST API. Built for bino.bot integration with 5 stunning reusable components.",
  keywords: ["Next.js", "Dynamic Pages", "API", "bino.bot", "React", "Components"],
  authors: [{ name: "Dynamic Page Generator Team" }],
  creator: "Dynamic Page Generator",
  publisher: "Dynamic Page Generator",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dynamic Page Generator",
    description: "Create beautiful pages instantly through our REST API",
    siteName: "Dynamic Page Generator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamic Page Generator",
    description: "Create beautiful pages instantly through our REST API",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
