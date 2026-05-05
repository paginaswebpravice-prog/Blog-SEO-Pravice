import { Metadata } from "next";
import ServiciosLegalesEmpresasColombiaContent from "./ServiciosLegalesEmpresasColombiaContent";

export const metadata: Metadata = {
  title:
    "Servicios legales para empresas en Colombia: qué incluyen y por qué son clave",
  description:
    "Descubre qué servicios legales necesitan las empresas en Colombia, desde contratos hasta asesoría jurídica permanente para prevenir riesgos y crecer de forma segura.",

  keywords: [
    "servicios legales empresas Colombia",
    "asesoría jurídica empresas Bogotá",
    "abogados empresas Colombia",
    "derecho comercial Colombia",
    "servicios jurídicos corporativos",
  ],

  authors: [{ name: "Guía Legal Colombia" }],
  creator: "Guía Legal Colombia",
  publisher: "Guía Legal Colombia",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical:
      "https://guialegalcolombia.vercel.app/blog/servicios-legales-empresas-colombia",
  },

  openGraph: {
    title:
      "Servicios legales para empresas en Colombia: qué incluyen y por qué son clave",
    description:
      "Guía completa sobre los servicios legales que necesita una empresa en Colombia para operar de forma segura.",
    url: "https://guialegalcolombia.vercel.app/blog/servicios-legales-empresas-colombia",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "/og/servicios-legales-empresas-colombia.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios legales para empresas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Servicios legales para empresas en Colombia: qué incluyen",
    description:
      "Conoce qué servicios legales necesita tu empresa para evitar riesgos.",
    images: ["/og/servicios-legales-empresas-colombia.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Legal",
};

export default function Page() {
  return <ServiciosLegalesEmpresasColombiaContent />;
}
