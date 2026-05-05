import { Metadata } from "next";
import EvitarProblemasLegalesEmpresaContent from "./EvitarProblemasLegalesEmpresaContent";

export const metadata: Metadata = {
  title:
    "Cómo evitar problemas legales en tu empresa en Colombia: guía práctica",
  description:
    "Aprende cómo prevenir problemas legales en tu empresa en Colombia, reducir riesgos jurídicos y proteger tu negocio con buenas prácticas legales.",
  keywords: [
    "evitar problemas legales empresa",
    "riesgos legales empresas Colombia",
    "cumplimiento legal empresas",
    "asesoría jurídica empresas",
    "prevención legal empresarial",
  ],

  authors: [{ name: "PRAVICE Abogados Laboralistas" }],
  creator: "PRAVICE Abogados Laboralistas",
  publisher: "PRAVICE Abogados Laboralistas",

  metadataBase: new URL("https://guialegalcolombia.vercel.app"),

  alternates: {
    canonical: "/blog/evitar-problemas-legales-empresa",
  },

  openGraph: {
    title: "Cómo evitar problemas legales en tu empresa en Colombia",
    description:
      "Guía práctica para prevenir riesgos legales y proteger tu negocio.",
    url: "/blog/evitar-problemas-legales-empresa",
    siteName: "Guía Legal Colombia",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "/og/evitar-problemas-legales.jpg",
        width: 1200,
        height: 630,
        alt: "Evitar problemas legales en empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Evitar problemas legales en tu empresa",
    description: "Consejos clave para reducir riesgos legales empresariales.",
    images: ["/og/evitar-problemas-legales.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Empresas",
};

export default function Page() {
  return <EvitarProblemasLegalesEmpresaContent />;
}
