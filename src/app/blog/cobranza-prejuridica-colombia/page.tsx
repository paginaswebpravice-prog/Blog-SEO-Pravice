import { Metadata } from "next";
import CobranzaPrejuridicaColombiaContent from "./CobranzaPrejuridicaColombiaContent";

export const metadata: Metadata = {
  title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
  description:
    "Conoce qué es la cobranza prejurídica en Colombia, cómo funciona y cómo recuperar deudas antes de iniciar un proceso judicial.",
  keywords: [
    "cobranza prejurídica Colombia",
    "recuperar cartera sin demanda",
    "cobro de deudas Colombia",
    "cobranza extrajudicial",
    "gestión de cartera Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/cobranza-prejuridica-colombia",
  },

  openGraph: {
    title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Aprende cómo recuperar deudas en Colombia sin necesidad de demandar.",
    url: "https://guialegalcolombia.vercel.app/blog/cobranza-prejuridica-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/cobranza-prejuridica-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cobranza prejurídica en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Descubre cómo recuperar cartera sin acudir a un proceso judicial.",
    images: [
      "https://guialegalcolombia.vercel.app/og/cobranza-prejuridica-colombia.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Finanzas",
};

export default function Page() {
  return <CobranzaPrejuridicaColombiaContent />;
}
