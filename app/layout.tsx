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
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Header */}
          <header className="border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold tracking-wide">
              CreatorDrop
            </h1>
            <nav className="space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-white transition">
                Explore
              </a>
              <a href="#" className="hover:text-white transition">
                Upload
              </a>
              <a href="#" className="hover:text-white transition">
                Connect
              </a>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-1">{children}</main>

          {/* Footer */}
          <footer className="border-t border-neutral-800 px-6 py-6 text-xs text-neutral-500 text-center">
            © {new Date().getFullYear()} CreatorDrop — Built for digital sovereignty.
          </footer>
        </div>
      </body>
    </html>
  );
}