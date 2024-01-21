import type { Metadata } from "next";

import "./globals.css";

import React from "react";

import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hoobank",
  description: "The Next Generation Payment Method",
  authors: [{ name: "navnxet", url: "https://navnxet.vercel.app" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-background antialiased border-border")}
      >
        {children}
      </body>
    </html>
  );
}
