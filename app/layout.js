import "./globals.css";
import { Inter } from "next/font/google";
import connectToDb from "@/lib/db";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: " Home",
  description: "Next JS Template",
  manifest: "/manifest.webmanifest",
};

connectToDb();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
