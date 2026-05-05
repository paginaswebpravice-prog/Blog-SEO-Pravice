import { Metadata } from "next";
import NoMePaganDeudaColombiaContent from "./NoMePaganDeudaColombiaContent";

export const metadata: Metadata = {
  title: "Qué hacer si no te pagan una deuda en Colombia: guía legal completa",
  description:
    "Descubre qué hacer si no te pagan una deuda en Colombia, opciones legales, cobro prejurídico y procesos judiciales para recuperar tu dinero.",
  keywords: [
    "no me pagan deuda Colombia",
    "cómo cobrar una deuda Colombia",
    "recuperar dinero deudor",
    "cobro de cartera Colombia",
    "procesos ejecutivos deudas",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/no-me-pagan-deuda-colombia",
  },

  openGraph: {
    title: "Qué hacer si no te pagan una deuda en Colombia",
    description:
      "Opciones legales para recuperar dinero de deudores en Colombia.",
    url: "/blog/no-me-pagan-deuda-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/no-me-pagan-deuda.jpg",
        width: 1200,
        height: 630,
        alt: "Cobro de deudas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "No me pagan una deuda en Colombia",
    description: "Guía legal para recuperar tu dinero de forma efectiva.",
    images: ["/og/no-me-pagan-deuda.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Finanzas",
};

export default function Page() {
  return <NoMePaganDeudaColombiaContent />;
}
