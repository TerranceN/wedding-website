import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import NavigationBar from "./NavigationBar";
import AutoLangSwitch from "./AutoLangSwitch";
import ScrollToAnchor from "./ScrollToAnchor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paula & Terrance 2026",
  description: "Information about Paula & Terrance getting married in 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <Suspense fallback="loading">
            <AutoLangSwitch />
            <NavigationBar />
            <ScrollToAnchor>{children}</ScrollToAnchor>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
