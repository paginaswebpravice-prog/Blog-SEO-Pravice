import { Metadata } from "next";
import TituloEjecutivoColombiaContent from "./TituloEjecutivoColombiaContent";

export const metadata: Metadata = {
  title: "Qué es un título ejecutivo en Colombia y para qué sirve",
  description:
    "Aprende qué es un título ejecutivo en Colombia, tipos de documentos válidos y cómo se utiliza para iniciar procesos ejecutivos.",
  keywords: [
    "título ejecutivo Colombia",
    "qué es un título ejecutivo",
    "procesos ejecutivos Colombia",
    "pagaré Colombia",
    "cobro jurídico Colombia",
    "letra de cambio Colombia",
  ],

  openGraph: {
    title: "Qué es un título ejecutivo en Colombia y para qué sirve",
    description:
      "Guía completa sobre el título ejecutivo en Colombia, documentos válidos y su uso en procesos judiciales.",
    url: "https://guialegalcolombia.vercel.app/blog/titulo-ejecutivo-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué es un título ejecutivo en Colombia",
    description:
      "Descubre qué documentos permiten iniciar un proceso ejecutivo en Colombia.",
  },

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/titulo-ejecutivo-colombia",
  },
};

export default function Page() {
  return <TituloEjecutivoColombiaContent />;
}
