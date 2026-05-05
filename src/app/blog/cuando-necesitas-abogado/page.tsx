import { Metadata } from "next";
import CuandoNecesitasAbogadoContent from "./CuandoNecesitasAbogadoContent";

export const metadata: Metadata = {
  title: "Qué hace un abogado y cuándo necesitas uno en Colombia",
  description:
    "Descubre qué hace un abogado, cuáles son sus funciones y en qué situaciones necesitas asesoría legal en Colombia.",
  keywords: [
    "qué hace un abogado",
    "cuándo necesito un abogado",
    "funciones de un abogado Colombia",
    "asesoría legal Colombia",
    "abogados en Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/cuando-necesitas-abogado",
  },

  openGraph: {
    title: "Qué hace un abogado y cuándo necesitas uno en Colombia",
    description:
      "Guía completa sobre funciones de un abogado y cuándo contratar uno en Colombia.",
    url: "/blog/cuando-necesitas-abogado",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/cuando-necesitas-abogado.jpg",
        width: 1200,
        height: 630,
        alt: "Cuándo necesitas un abogado en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué hace un abogado y cuándo necesitas uno en Colombia",
    description:
      "Aprende en qué situaciones es recomendable contratar un abogado.",
    images: ["/og/cuando-necesitas-abogado.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Guía Legal",
};

export default function Page() {
  return <CuandoNecesitasAbogadoContent />;
}
