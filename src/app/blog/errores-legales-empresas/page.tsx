import { Metadata } from "next";
import ErroresLegalesEmpresasContent from "./ErroresLegalesEmpresasContent";

export const metadata: Metadata = {
  title:
    "Errores legales que cometen las empresas en Colombia y cómo evitarlos",
  description:
    "Descubre los errores legales más comunes en empresas en Colombia y cómo evitarlos para proteger tu negocio y evitar sanciones.",
  keywords: [
    "errores legales empresas Colombia",
    "problemas legales empresas",
    "riesgos legales empresas Colombia",
    "asesoría jurídica empresas",
    "cumplimiento legal empresas",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/errores-legales-empresas",
  },

  openGraph: {
    title: "Errores legales que cometen las empresas en Colombia",
    description:
      "Evita sanciones y problemas legales con esta guía para empresas en Colombia.",
    url: "/blog/errores-legales-empresas",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/errores-legales-empresas.jpg",
        width: 1200,
        height: 630,
        alt: "Errores legales en empresas Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Errores legales en empresas en Colombia",
    description: "Guía para evitar riesgos legales empresariales.",
    images: ["/og/errores-legales-empresas.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Empresas",
};

export default function Page() {
  return <ErroresLegalesEmpresasContent />;
}
