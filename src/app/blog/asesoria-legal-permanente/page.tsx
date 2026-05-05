import { Metadata } from "next";
import AsesoriaLegalPermanenteContent from "./AsesoriaLegalPermanenteContent";

export const metadata: Metadata = {
  title: "Ventajas de contratar asesoría legal permanente en Colombia",
  description:
    "Descubre por qué contar con asesoría legal permanente puede proteger tu empresa, prevenir riesgos y optimizar decisiones en Colombia.",
  keywords: [
    "asesoría legal permanente Colombia",
    "abogado para empresas Bogotá",
    "asesoría jurídica empresarial",
    "servicios legales empresas Colombia",
    "abogados corporativos Bogotá",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/asesoria-legal-permanente",
  },

  openGraph: {
    title: "Ventajas de contratar asesoría legal permanente en Colombia",
    description:
      "Conoce cómo la asesoría jurídica permanente ayuda a prevenir problemas legales y mejorar la gestión empresarial.",
    url: "https://guialegalcolombia.vercel.app/blog/asesoria-legal-permanente",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://guialegalcolombia.vercel.app/og/asesoria-legal-permanente.jpg",
        width: 1200,
        height: 630,
        alt: "Asesoría legal permanente en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ventajas de contratar asesoría legal permanente en Colombia",
    description:
      "Evita problemas legales y protege tu empresa con asesoría jurídica continua.",
    images: [
      "https://guialegalcolombia.vercel.app/og/asesoria-legal-permanente.jpg",
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

  category: "Empresas",
};

export default function Page() {
  return <AsesoriaLegalPermanenteContent />;
}
