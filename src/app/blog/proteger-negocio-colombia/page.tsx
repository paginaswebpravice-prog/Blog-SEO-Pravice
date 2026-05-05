import { Metadata } from "next";
import ProtegerNegocioColombiaContent from "./ProtegerNegocioColombiaContent";

export const metadata: Metadata = {
  title: "Cómo proteger legalmente tu negocio en Colombia",
  description:
    "Aprende cómo proteger legalmente tu negocio en Colombia con estrategias jurídicas, contratos y asesoría legal preventiva.",

  keywords: [
    "proteger negocio Colombia",
    "asesoría legal empresas Colombia",
    "riesgos legales empresas",
    "abogados empresas Bogotá",
    "derecho comercial Colombia",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/proteger-negocio-colombia",
  },

  openGraph: {
    title: "Cómo proteger legalmente tu negocio en Colombia",
    description:
      "Guía completa para proteger tu empresa en Colombia y evitar riesgos legales.",
    url: "https://guialegalcolombia.vercel.app/blog/proteger-negocio-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/proteger-negocio.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo proteger legalmente tu negocio en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo proteger legalmente tu negocio en Colombia",
    description:
      "Estrategias legales para proteger tu empresa y evitar riesgos jurídicos.",
    images: ["https://guialegalcolombia.vercel.app/og/proteger-negocio.jpg"],
  },
};

export default function Page() {
  return <ProtegerNegocioColombiaContent />;
}
