import { Metadata } from "next";
import TiposContratosColombiaContent from "./TiposContratosColombiaContent";

export const metadata: Metadata = {
  title: "Tipos de contratos en Colombia y para qué sirve cada uno",
  description:
    "Conoce los tipos de contratos en Colombia, sus características y cuándo utilizar cada uno en el ámbito civil y comercial.",
  keywords: [
    "tipos de contratos Colombia",
    "contratos legales Colombia",
    "contrato civil Colombia",
    "contrato comercial Colombia",
    "cómo hacer contratos Colombia",
  ],

  authors: [{ name: "Guía Legal Colombia" }],
  creator: "Guía Legal Colombia",
  publisher: "Guía Legal Colombia",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/tipos-contratos-colombia",
  },

  openGraph: {
    title: "Tipos de contratos en Colombia y para qué sirve cada uno",
    description:
      "Guía completa sobre contratos en Colombia y cuándo usar cada tipo.",
    url: "https://guialegalcolombia.vercel.app/blog/tipos-contratos-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/tipos-contratos-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Tipos de contratos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tipos de contratos en Colombia y para qué sirve cada uno",
    description:
      "Aprende qué tipo de contrato usar según tu situación legal o empresarial.",
    images: ["/og/tipos-contratos-colombia.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function Page() {
  return <TiposContratosColombiaContent />;
}
