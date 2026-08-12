import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";

export const metadata: Metadata = {
  title: "Rony Peter | Software Developer Portfolio",
  description: "Explore the portfolio of Rony Peter, a software developer building modern web and mobile applications.",
  keywords: ["Software Developer", "Frontend Developer", "Web Developer", "Flutter", "Next.js", "Portfolio"],
  authors: [{ name: "Rony Peter" }],
  creator: "Rony Peter",
  metadataBase: new URL("https://ronypeter.in"),
  openGraph: {
    title: "Rony Peter | Software Developer Portfolio",
    description: "Explore the portfolio of Rony Peter, a software developer building modern web and mobile applications.",
    url: "https://ronypeter.in",
    siteName: "Rony Peter Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}