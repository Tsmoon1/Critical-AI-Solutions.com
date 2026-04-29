import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Critical AI Solutions",
  description: "AI literacy training, diagnosis, and custom tool building for classical schools: helping educators navigate AI without losing what makes them different.",
  openGraph: {
    title: "Critical AI Solutions",
    description: "AI literacy training, diagnosis, and custom tool building for classical schools: helping educators navigate AI without losing what makes them different.",
    url: "https://critical-ai-solutions.com",
    siteName: "Critical AI Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Critical AI Solutions",
    description: "AI literacy training, diagnosis, and custom tool building for classical schools: helping educators navigate AI without losing what makes them different.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
