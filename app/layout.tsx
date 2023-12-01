import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UX/UI App for Camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className="scroll scroll-smooth bg-white/80"
      >
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
