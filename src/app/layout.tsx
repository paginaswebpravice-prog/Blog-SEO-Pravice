import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Guía Legal Colombia",
    template: "%s | Guía Legal Colombia",
  },
  description:
    "Blog legal en Colombia con guías sobre abogados, derecho comercial, conciliación, cobro de cartera y creación de empresas.",
  metadataBase: new URL("https://guialegalcolombia.vercel.app"),
  openGraph: {
    title: "Guía Legal Colombia",
    description: "Información legal en Colombia para personas y empresas.",
    url: "https://guialegalcolombia.vercel.app",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* NAVBAR */}
        <header className="header">
          <div className="nav">
            <Link href="/" className="logo">
              Guía Legal Colombia
            </Link>

            <nav className="links">
              <Link href="/">Inicio</Link>
              <Link href="/blog">Blog</Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="main">
          <div className="container">{children}</div>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} Guía Legal Colombia. Información legal
            en Colombia.
          </p>
        </footer>
      </body>
    </html>
  );
}
