import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CreatorDrop",
  description: "CreatorDrop — ship your drops, own your distribution.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="appShell">
          <header className="topBar">
            <div className="container topBarInner">
              <div className="brand">
                <div className="brandMark" aria-hidden="true" />
                <div className="brandText">
                  <div className="brandName">CreatorDrop</div>
                  <div className="brandTag">Drops. Discovery. Staking.</div>
                </div>
              </div>

              <nav className="nav">
                <a className="navLink" href="#drop">Drop</a>
                <a className="navLink" href="#discover">Discover</a>
                <a className="navLink" href="#stake">Stake</a>
              </nav>

              <div className="actions">
                <button className="btn btnGhost" type="button">
                  Docs
                </button>
                <button className="btn btnPrimary" type="button">
                  Connect Wallet
                </button>
              </div>
            </div>
          </header>

          <main className="main">
            <div className="container">{children}</div>
          </main>

          <footer className="footer">
            <div className="container footerInner">
              <div className="muted">
                © {new Date().getFullYear()} CreatorDrop. Built to ship.
              </div>
              <div className="footerLinks">
                <a className="footerLink" href="#privacy">Privacy</a>
                <a className="footerLink" href="#terms">Terms</a>
                <a className="footerLink" href="#support">Support</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}