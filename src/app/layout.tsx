import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Portfolio",
  description:
    "Portfolio of a creative technologist, web developer, and digital marketing professional.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}