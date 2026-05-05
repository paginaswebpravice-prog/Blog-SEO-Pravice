import { Metadata } from "next";
import IncumplimientoContratoConsecuenciasContent from "./IncumplimientoContratoConsecuenciasContent";

export const metadata: Metadata = {
  title: "Qué pasa si incumplo un contrato en Colombia: consecuencias legales",
  description:
    "Descubre las consecuencias legales del incumplimiento de contrato en Colombia, sanciones, demandas y cómo actuar ante esta situación.",
  keywords: [
    "incumplimiento de contrato Colombia",
    "consecuencias incumplir contrato",
    "demanda por incumplimiento contrato",
    "responsabilidad contractual Colombia",
    "problemas legales contratos",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/incumplimiento-contrato-consecuencias",
  },

  openGraph: {
    title: "Qué pasa si incumples un contrato en Colombia",
    description:
      "Conoce las consecuencias legales y cómo actuar ante un incumplimiento contractual.",
    url: "/blog/incumplimiento-contrato-consecuencias",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/incumplimiento-contrato.jpg",
        width: 1200,
        height: 630,
        alt: "Incumplimiento de contrato en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Incumplimiento de contrato en Colombia",
    description: "Consecuencias legales y qué hacer ante un incumplimiento.",
    images: ["/og/incumplimiento-contrato.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function Page() {
  return <IncumplimientoContratoConsecuenciasContent />;
}
