import { TopBar } from "@/components/ui/TopBar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  viewport:
    "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-full h-full">
      <body
        className={cn(
          inter.className,
          "w-full h-full flex flex-col p-safe max-h-full",
        )}
      >
        <header>
          <TopBar />
        </header>
        <main className="flex-1 p-4 overflow-auto">{children}</main>
        <nav>
          <Navbar />
        </nav>
        <Toaster />
      </body>
    </html>
  );
}
