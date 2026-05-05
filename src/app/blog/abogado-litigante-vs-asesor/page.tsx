import { Metadata } from "next";
import AbogadoLitiganteVsAsesorContent from "./AbogadoLitiganteVsAsesorContent";

export const metadata: Metadata = {
  title: "Diferencia entre abogado litigante y asesor jurídico en Colombia",
  description:
    "Conoce las diferencias entre un abogado litigante y un asesor jurídico en Colombia, sus funciones y cuándo necesitas cada uno.",
  keywords: [
    "abogado litigante Colombia",
    "asesor jurídico Colombia",
    "diferencia abogado litigante y asesor",
    "tipos de abogados Colombia",
    "asesoría legal empresas Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app/"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/abogado-litigante-vs-asesor",
  },

  openGraph: {
    title: "Diferencia entre abogado litigante y asesor jurídico en Colombia",
    description:
      "Descubre qué hace un abogado litigante y un asesor jurídico y cuál necesitas según tu caso.",
    url: "https://guialegalcolombia.vercel.app/blog/abogado-litigante-vs-asesor",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/abogado-litigante-vs-asesor.jpg",
        width: 1200,
        height: 630,
        alt: "Diferencia entre abogado litigante y asesor jurídico",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Diferencia entre abogado litigante y asesor jurídico en Colombia",
    description: "Guía clara para entender qué tipo de abogado necesitas.",
    images: [
      "https://guialegalcolombia.vercel.app/og/abogado-litigante-vs-asesor.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Guía Legal",
};

export default function Page() {
  return <AbogadoLitiganteVsAsesorContent />;
}
