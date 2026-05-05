import { Metadata } from "next";
import AbogadoCobroCarteraBogotaContent from "./AbogadoCobroCarteraBogotaContent";

export const metadata: Metadata = {
  title: "Abogado para cobro de cartera en Bogotá: cuándo contratar uno",
  description:
    "Descubre cuándo necesitas un abogado para cobro de cartera en Bogotá, cómo recuperar deudas y qué opciones legales existen en Colombia.",

  keywords: [
    "abogado cobro de cartera Bogotá",
    "cobro de deudas Colombia",
    "recuperar cartera Bogotá",
    "abogados cobro jurídico",
    "procesos ejecutivos Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app/"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/abogado-cobro-cartera-bogota",
  },

  openGraph: {
    title: "Abogado para cobro de cartera en Bogotá: cuándo contratar uno",
    description:
      "Conoce cuándo contratar un abogado para recuperar deudas en Bogotá y qué opciones legales tienes en Colombia.",
    url: "/blog/abogado-cobro-cartera-bogota",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/abogado-cobro-cartera-bogota.jpg",
        width: 1200,
        height: 630,
        alt: "Abogado para cobro de cartera en Bogotá",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abogado para cobro de cartera en Bogotá: cuándo contratar uno",
    description:
      "Guía completa para recuperar deudas en Bogotá con apoyo legal.",
    images: ["/og/abogado-cobro-cartera-bogota.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Legal",
};

export default function Page() {
  return <AbogadoCobroCarteraBogotaContent />;
}
