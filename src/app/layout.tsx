import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ByteSpace",
    template: "%s | ByteSpace",
  },
  description:
    "ByteSpace is an online learning platform to discover courses from expert creators.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
