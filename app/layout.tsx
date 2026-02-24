import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CreatorDrop",
  description: "Digital ownership. Music. Art. Code. On-chain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black">
      <body className="min-h-screen bg-gradient-to-b from-black via-neutral-950 to-black text-neutral-100 antialiased font-sans">
        <div className="flex min-h-screen flex-col">

          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-neutral-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
              <h1 className="text-xl font-semibold tracking-wide text-white">
                CreatorDrop
              </h1>

              <nav className="hidden md:flex gap-8 text-sm text-neutral-400">
                <a href="#explore" className="hover:text-white transition">
                  Explore
                </a>
                <a href="#upload" className="hover:text-white transition">
                  Upload
                </a>
                <a href="#connect" className="hover:text-white transition">
                  Connect
                </a>
              </nav>
            </div>
          </header>

          {/* Page */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-neutral-800 py-6 text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} CreatorDrop — Built for digital sovereignty.
          </footer>
        </div>
      </body>
    </html>
  );
}