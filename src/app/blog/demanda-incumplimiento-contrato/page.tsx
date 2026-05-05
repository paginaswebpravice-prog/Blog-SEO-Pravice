import { Metadata } from "next";
import DemandaIncumplimientoContratoContent from "./DemandaIncumplimientoContratoContent";

export const metadata: Metadata = {
  title:
    "Demanda por incumplimiento de contrato en Colombia: cómo hacerlo paso a paso",
  description:
    "Aprende cómo demandar por incumplimiento de contrato en Colombia, requisitos, proceso legal y qué hacer ante un incumplimiento.",
  keywords: [
    "demanda incumplimiento contrato Colombia",
    "incumplimiento contrato qué hacer",
    "demandar contrato Colombia",
    "proceso incumplimiento contractual",
    "abogado contratos Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/demanda-incumplimiento-contrato",
  },

  openGraph: {
    title: "Demanda por incumplimiento de contrato en Colombia",
    description:
      "Guía completa para demandar por incumplimiento de contrato en Colombia.",
    url: "/blog/demanda-incumplimiento-contrato",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/demanda-incumplimiento-contrato.jpg",
        width: 1200,
        height: 630,
        alt: "Demanda por incumplimiento de contrato en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Demanda por incumplimiento de contrato en Colombia",
    description: "Cómo demandar legalmente por incumplimiento contractual.",
    images: ["/og/demanda-incumplimiento-contrato.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function Page() {
  return <DemandaIncumplimientoContratoContent />;
}
