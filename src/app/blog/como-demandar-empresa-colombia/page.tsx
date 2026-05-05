import { Metadata } from "next";
import ComoDemandarEmpresaColombiaContent from "./ComoDemandarEmpresaColombiaContent";

export const metadata: Metadata = {
  title: "Cómo demandar a una empresa en Colombia paso a paso",
  description:
    "Aprende cómo demandar a una empresa en Colombia, requisitos, pasos legales y qué debes tener en cuenta antes de iniciar un proceso judicial.",
  keywords: [
    "demandar empresa Colombia",
    "cómo demandar empresa Bogotá",
    "proceso judicial Colombia empresas",
    "demanda civil Colombia",
    "abogados demandas Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/como-demandar-empresa-colombia",
  },

  openGraph: {
    title: "Cómo demandar a una empresa en Colombia paso a paso",
    description:
      "Guía completa para iniciar acciones legales contra una empresa en Colombia.",
    url: "https://guialegalcolombia.vercel.app/blog/como-demandar-empresa-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/como-demandar-empresa-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo demandar una empresa en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo demandar a una empresa en Colombia paso a paso",
    description:
      "Todo lo que necesitas saber para iniciar una demanda en Colombia.",
    images: [
      "https://guialegalcolombia.vercel.app/og/como-demandar-empresa-colombia.jpg",
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

  category: "Legal",
};

export default function Page() {
  return <ComoDemandarEmpresaColombiaContent />;
}
