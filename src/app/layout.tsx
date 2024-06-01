import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Golam Kibria",
  description: "Personal website of Golam Kibria",
  keywords: [
    "software",
    "software engineer",
    "freelancer",
    "react developer",
    "nodejs developer",
    "frontend developer",
    "backend developer",
    "full stack developer",
    "python developer",
    "django developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
