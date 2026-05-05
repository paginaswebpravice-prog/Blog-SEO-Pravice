import { Metadata } from "next";
import SasColombiaContent from "./SasColombiaContent";

export const metadata: Metadata = {
  title: "Qué es una SAS en Colombia y cómo funciona",
  description:
    "Conoce qué es una SAS en Colombia, cómo funciona, sus ventajas, requisitos y por qué es el tipo de empresa más utilizado.",
  keywords: [
    "SAS Colombia",
    "sociedad por acciones simplificada",
    "crear empresa SAS Colombia",
    "tipos de empresas Colombia",
    "cómo funciona una SAS",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://guialegalcolombia.vercel.app/blog/sas-colombia",
  },

  openGraph: {
    title: "Qué es una SAS en Colombia y cómo funciona",
    description:
      "Guía completa sobre la Sociedad por Acciones Simplificada en Colombia, sus ventajas y cómo crearla.",
    url: "https://guialegalcolombia.vercel.app/blog/sas-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/sas-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Qué es una SAS en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué es una SAS en Colombia y cómo funciona",
    description:
      "Descubre cómo funciona una SAS en Colombia y por qué es el modelo empresarial más utilizado.",
    images: ["https://guialegalcolombia.vercel.app/og/sas-colombia.jpg"],
  },
};

export default function Page() {
  return <SasColombiaContent />;
}
