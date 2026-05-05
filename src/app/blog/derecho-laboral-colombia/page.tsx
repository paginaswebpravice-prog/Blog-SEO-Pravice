import { Metadata } from "next";
import DerechoLaboralColombiaContent from "./DerechoLaboralColombiaContent";

export const metadata: Metadata = {
  title:
    "Derecho laboral en Colombia: derechos y obligaciones de trabajadores y empresas",
  description:
    "Guía completa sobre derecho laboral en Colombia, derechos del trabajador, obligaciones del empleador y normativa laboral vigente.",
  keywords: [
    "derecho laboral Colombia",
    "derechos laborales Colombia",
    "ley laboral Colombia",
    "contrato laboral Colombia",
    "obligaciones empleador Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/derecho-laboral-colombia",
  },

  openGraph: {
    title:
      "Derecho laboral en Colombia: guía completa para empresas y trabajadores",
    description:
      "Conoce los derechos y obligaciones en el derecho laboral colombiano.",
    url: "/blog/derecho-laboral-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/derecho-laboral-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho laboral en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Derecho laboral en Colombia",
    description: "Guía completa sobre legislación laboral en Colombia.",
    images: ["/og/derecho-laboral-colombia.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function Page() {
  return <DerechoLaboralColombiaContent />;
}
