import { Metadata } from "next";
import CuantoCuestaAbogadoColombiaContent from "./CuantoCuestaAbogadoColombiaContent";

export const metadata: Metadata = {
  title: "Cuánto cuesta un abogado en Colombia: tarifas y honorarios",
  description:
    "Descubre cuánto cuesta un abogado en Colombia, tipos de honorarios, tarifas y factores que influyen en el precio de los servicios legales.",
  keywords: [
    "cuánto cuesta un abogado Colombia",
    "honorarios abogados Colombia",
    "tarifas legales Colombia",
    "precio abogado Bogotá",
    "cuánto cobra un abogado Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/cuanto-cuesta-abogado-colombia",
  },

  openGraph: {
    title: "Cuánto cuesta un abogado en Colombia: tarifas y honorarios",
    description:
      "Guía completa sobre precios de abogados en Colombia y factores que influyen en los honorarios.",
    url: "https://guialegalcolombia.vercel.app/blog/cuanto-cuesta-abogado-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/cuanto-cuesta-abogado-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Cuánto cuesta un abogado en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cuánto cuesta un abogado en Colombia",
    description: "Conoce las tarifas y honorarios de abogados en Colombia.",
    images: ["/og/cuanto-cuesta-abogado-colombia.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Guía Legal",
};

export default function Page() {
  return <CuantoCuestaAbogadoColombiaContent />;
}
