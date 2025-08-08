import "./globals.css";
import Navbar from "../app/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sithu Win Portfolio",
  description: "Personal portfolio website of Sithu Win",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg-primary text-text-primary font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
