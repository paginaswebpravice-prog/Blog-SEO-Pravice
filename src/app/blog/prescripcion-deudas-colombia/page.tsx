import { Metadata } from "next";
import PrescripcionDeudasColombiaContent from "./PrescripcionDeudasColombiaContent";

export const metadata: Metadata = {
  title: "Cuándo prescribe una deuda en Colombia: tiempos y reglas legales",
  description:
    "Conoce cuándo prescribe una deuda en Colombia, los plazos legales, qué dice la ley y cómo afecta a acreedores y deudores.",
  keywords: [
    "prescripción de deudas Colombia",
    "cuándo prescribe una deuda",
    "tiempo prescripción deudas Colombia",
    "deudas vencidas Colombia",
    "cobro de cartera prescripción",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/prescripcion-deudas-colombia",
  },

  openGraph: {
    title: "Prescripción de deudas en Colombia",
    description:
      "Descubre cuándo una deuda deja de ser exigible según la ley colombiana.",
    url: "https://guialegalcolombia.vercel.app/blog/prescripcion-deudas-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/prescripcion-deudas.jpg",
        width: 1200,
        height: 630,
        alt: "Prescripción de deudas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prescripción de deudas en Colombia",
    description: "Plazos legales y qué significa que una deuda prescriba.",
    images: ["https://guialegalcolombia.vercel.app/og/prescripcion-deudas.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Finanzas",
};

export default function Page() {
  return <PrescripcionDeudasColombiaContent />;
}
