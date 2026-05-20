import "./globals.css";
import Navbar from "../app/components/Navbar";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
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
    <html lang="en" className={`${jetbrainsMono.variable} scroll-smooth`}>
      <body
        className="bg-bg-primary text-text-primary font-mono antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
