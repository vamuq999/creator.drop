import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CreatorDrop",
  description: "Drops, ownership, and unlocks — CreatorDrop.",
  metadataBase: new URL("https://creatordrop.local"),
  openGraph: {
    title: "CreatorDrop",
    description: "Drops, ownership, and unlocks — CreatorDrop.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CreatorDrop",
    description: "Drops, ownership, and unlocks — CreatorDrop.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="bg">
          <header className="header">
            <div className="headerInner">
              <div className="brand">
                <div className="logo">CD</div>
                <div className="brandText">
                  <div className="brandName">CreatorDrop</div>
                  <div className="brandTag">Proof of support. Proof of access.</div>
                </div>
              </div>

              <nav className="nav">
                <a className="navLink" href="#drops">Drops</a>
                <a className="navLink" href="#how">How it works</a>
                <a className="navLink" href="#roadmap">Roadmap</a>
                <button className="btn btnGhost" type="button">
                  Connect Wallet
                </button>
              </nav>
            </div>
          </header>

          <main className="main">{children}</main>

          <footer className="footer">
            <div className="footerInner">
              <div className="muted">
                © {new Date().getFullYear()} CreatorDrop — built for creators, not middlemen.
              </div>
              <div className="muted">
                Not financial advice. Access + culture + utility.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}